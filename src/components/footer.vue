<template>
    <footer>
        <div class='address'>
            <div class='data'>
                <img :src='src' />
                <p>166 1977 7654（周一至周日：8:00 - 22:00）</p>
                <p>北京市海淀区北四环西路58号理想国际大厦11层</p>
            </div>
            <div class='link'>
                <a id='github' href='https://github.com/rianran1993/ofo' target='_blank'/>
                <a id='wechat' href='javascript:;' @mouseover='show' @mouseleave='hide'/>
            </div>
        </div>
        <div class='company'>
            <p><a href="http://beian.miit.gov.cn">黑ICP备19007799号</a>    |   商务合作邮箱  lipengfei1023@qq.com</p>
        </div>
    </footer>
</template>

<script>

export default {
    name: 'header',
    data () {
        return {
            src: '/static/img/footer_logo.png'
        }
    },
    methods: {
        show () {
            this.src = '/static/img/wx-qrcode.jpg';
        },
        hide () {
            this.src = '/static/img/footer_logo.png';
        }
    }
}
</script>

<style lang='scss'>
    footer{
        top: 1000px;
        left: 0;
        height: 25vh;
        background: #191919;
    }
    .address {
        height: 165px;
        font-size: 12px;
        color: #a3a3a3;
        text-align: center;
    }    
    .company {
        border-top: 1px solid #2b2b2b;
        font-size: 12px;
        color: #a3a3a3;
        text-align: center;
    }
    .company{
        a{
             color: #a3a3a3;
        }
    }
    .address img{
        width: 75px;
        height: 72px;
    }
    .data{
        position: relative;
        top: 7%;
    }
    .link{
        font-size: 12px;
        color: #a3a3a3;
        text-align: center; 
        position: relative;
        top: 12%;        
    }
    @mixin img-style{
        display: inline-block;
        width: 24px;
        height: 22px;
    }
    #github {
        background: url('/static/img/github.png');
        @include img-style;
        margin-right: 35px;
    }    
    #wechat {
        background: url('/static/img/social_icon.png');
        @include img-style;
        background-position: -24px 0;
    }
</style>
