<template>
    <ParentLayout >
        <Disqus slot="page-bottom" v-if="this.$frontmatter.disqus" class="content"/>
    </ParentLayout>
</template>

<script>
import ParentLayout from '@parent-theme/layouts/Layout.vue'
import Disqus from '../theme/components/Disqus.vue';

export default {
    components: {
        ParentLayout,
        Disqus
    }
}
</script>