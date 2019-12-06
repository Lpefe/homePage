import Vue from 'vue'
import VueRouter from 'vue-router'
import header from '../components/header'
import swipe from '../components/swipe'
import swipeList from '../components/swipeList'
import footer from '../components/footer'
import shareContent from '../components/shareContent'
import aboutContent from '../components/aboutContent'
import downloadContent from '../components/downloadContent'
import jobContent from '../components/jobContent'
Vue.use(VueRouter)

const routes = [{
    path: '/',
    components: {
        header: header,
        swipe: swipe,
        swipeList: swipeList,
        footer: footer
    },
    beforeEnter(to, from, next) {
        [].forEach.call(document.getElementsByTagName('li'), function(item) { item.className = '' });
        next();
    }
}, {
    path: '/about',
    components: {
        header: header,
        footer: footer,
        aboutContent: aboutContent
    }
}, {
    path: '/share',
    components: {
        header: header,
        shareContent: shareContent,
        footer: footer
    }
}, {
    path: '/job',
    components: {
        header: header,
        footer: footer,
        jobContent: jobContent
    }
}, {
    path: '/download',
    components: {
        header: header,
        footer: footer,
        downloadContent: downloadContent
    }
}]

const router = new VueRouter({
    routes
})

export default router