<template>
  <main class="page">
    <h1>🍀</h1>
    <div class="post-list">
      <div v-for="post in paginatedPosts" :key="post.path" class="post-item">
        <h2><router-link :to="post.path">{{ post.title }}</router-link></h2>
        <p class="post-date">{{ post.formatDate }}</p>
      </div>
    </div>
    <div class="pagination">
      <button @click="prevPage" :disabled="currentPage === 1">&laquo;</button>
      <button
        v-for="page in totalPages"
        :key="page"
        @click="goToPage(page)"
        :class="{ active: currentPage === page }"
      >
        {{ page }}
      </button>
      <button @click="nextPage" :disabled="currentPage === totalPages">&raquo;</button>
    </div>
  </main>
</template>

<script>
export default {
  name: 'Contents',
  data() {
    return {
      currentPage: 1,
      perPage: 10,
    };
  },
  computed: {
    posts() {
      // 1. date와 title이 있는 페이지 필터링
      console.log(this.$site.pages);
      const filteredPages = this.$site.pages
        .filter(page => page.frontmatter.date && page.title);

      // 2. 날짜를 기준으로 내림차순 정렬 (최신순)
      const sortedPages = filteredPages
        .sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date));

      // 3. 표시할 데이터와 형식화된 날짜 추가
      return sortedPages.map(page => {
        const dateObj = new Date(page.frontmatter.date);
        
        // 날짜를 YYYY-MM-DD 형식으로 형식화 (예: 2025-11-17)
        const year = dateObj.getFullYear();
        const month = String(dateObj.getMonth() + 1).padStart(2, '0');
        const day = String(dateObj.getDate()).padStart(2, '0');
        const formatDate = `${year}-${month}-${day}`;

        return {
          path: page.path,
          title: page.title,
          formatDate: formatDate, // 형식화된 날짜
        };
      });
    },
    paginatedPosts() {
      const start = (this.currentPage - 1) * this.perPage;
      const end = start + this.perPage;
      return this.posts.slice(start, end);
    },
    totalPages() {
      if (!this.posts || this.posts.length === 0) {
        return 1;
      }
      return Math.ceil(this.posts.length / this.perPage);
    }
  },
  methods: {
    goToPage(page) {
      if (page > 0 && page <= this.totalPages) {
        this.currentPage = page;
      }
    },
    nextPage() {
      this.goToPage(this.currentPage + 1);
    },
    prevPage() {
      this.goToPage(this.currentPage - 1);
    }
  }
}
</script>


<style scoped>
/* 간단한 스타일 예시 */
.page {
  max-width: 100%;
  margin: 0 auto;
  padding: 20px;
}

h1 {
  border-bottom: 2px solid #eee;
  padding-bottom: 10px;
}

.post-item {
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 2px solid #eee;
  
}

.post-item:last-child {
  border-bottom: none;
}

h2 {
  margin-top: 0;
  margin-bottom: 5px;
  font-size: 1.5em;
  border-bottom: none;
}

.post-date {
  color: #777;
  font-size: 0.9em;
  margin: 0;
}

a {
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

.pagination button {
  margin: 0 5px;
  padding: 5px 10px;
  border: none;
  background-color: #fff;
  cursor: pointer;
  color: #777777;
  font-size: 1.2em;
}

.pagination button:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}

.pagination button.active {
  font-weight: bold;
  color: #bb4dff;
}
</style>