<template>
    <header>
        <div id="nav" class="col">
            <router-link class="logo" to='/' tag='div'>
                <img src="/static/img/logo.png"/>
            </router-link>
            <div class="nav-item">
                <ul>
                    <li @mouseover='addClass($event)' @mouseleave='rmClass($event)' v-for="item in navItems" @click="toLink(item.link,$event)">
                        {{item.text}}
                    </li>
                </ul>
            </div>
        </div>
    </header>
</template>

<script>
const navItems = [{
    text: '首页',
    link: '/'
}
// ,{
//     text: 'demo',
//     link: '/anli1'
// }

// ,{
//     text: '关于我们',
//     link: '/about'
// },{
//     text: '大共享',
//     link: '/share'
// },{
//     text: '下载APP',
//     link: '/download'
// },{
//     text: '加入我们',
//     link: '/job'
// }
];
import router from '../router';
export default {
    name: 'header',
    data () {
        return {
            navItems: navItems,
            navIn: 'nav-out'
        }
    },
    methods: {
        toLink (link,$event) {
            [].forEach.call(document.getElementsByTagName('li'),function(item) {item.className = ''});
            $event.target.className = 'selected';
            router.push(link || '/');
        },
        addClass ($event) {
			if(!$event.target.className.match(new RegExp('(\\s|^)' + 'selected' + '(\\s|$)'))) {
				$event.target.className = ' ';
			}
			if(!$event.target.className.match(new RegExp('(\\s|^)' + 'nav-in' + '(\\s|$)'))) {
				$event.target.className += ' ' + 'nav-in';
			}
        },
        rmClass ($event) {
			if(!$event.target.className.match(new RegExp('(\\s|^)' + 'selected' + '(\\s|$)'))) {
				$event.target.className = ' ';
			}
			if(!$event.target.className.match(new RegExp('(\\s|^)' + 'nav-out' + '(\\s|$)'))) {
				$event.target.className += ' ' + 'nav-out';
			}
        }
    }
}
</script>

<style lang='scss'>
    header {
        width: 100%;
        height: 100px;
        background: rgba(0, 0, 0, 0.6);
        position: fixed;
        z-index: 9;
    }
    #nav {
        position: absolute;
		width: 100%;
		height: 100%;
    }
    .logo {
        width: 54px;
        height: 54px;
        position: relative;
        left: 15%;
		top: 25%;
        cursor: pointer;
        z-index: 100;
    }
    .nav-item {
        ul {
            list-style: none;
            margin: 0;
            padding: 0;
            position: relative;
            left: 25%;
            bottom: 20px;
            display: flex;
            align-items: center;
            justify-content: center
        }
    }
    li {
        height: 26px;
        line-height: 26px;
        position: relative;
        display: inline-block;
        margin-left: 2vw;
        color: white;
        cursor: pointer;
        font-size: 1vw;
        color: #fff;
        opacity: 0.8;
    }
    .selected {
        color: yellow;
    }
    @mixin nav-in{
        @-webkit-keyframes navin{
            0%{
                color: #a3daa5
            }
            100%{
                color: #0bfb13
            }
        }
        @-moz-keyframes navin{
            0%{
                color: #a3daa5
            }
            100%{
                color: #0bfb13
            }
        }
        @-ms-keyframes navin{
            0%{
                color: #a3daa5
            }
            100%{
                color: #0bfb13
            }
        }
        @-o-keyframes navin{
            0%{
                color: #a3daa5
            }
            100%{
                color: #0bfb13
            }
        }
        @keyframes navin{
            0%{
                color: #a3daa5
            }
            100%{
                color: #0bfb13
            }
        }
    }
	.nav-in {
        @include nav-in;
	  -webkit-animation:navin .5s 0s ease both;
		 -moz-animation:navin .5s 0s ease both;
		  -ms-animation:navin .5s 0s ease both;
		   -o-animation:navin .5s 0s ease both;
			  animation:navin .5s 0s ease both; 
    }
</style>
