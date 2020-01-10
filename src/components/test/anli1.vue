<template>
    <div style="width:100%;height:100vh;">
        <!-- <button @click="addBlock">添加</button>
        <div v-for="(item,key) in arrBlock" :key="key" class="box">
            <div class="draggable" :ref="'block'+item" :id="item">
                <div :id="item" class="circleTop" @click="clickCircleTop($event)"></div>
                <div :id="item" class="circleBottom" @click="clickCircleBottom($event)"></div>
            </div>
        </div> -->


        
        <div v-for="(item,key) in arrRow" :key="key" class="box ">
            <el-button style="position:absolute;top:0;right:0;" @click="addBlock(item.id)">添加</el-button>
            <div v-for="(child,key) in item.child" :key="key" class="draggable ex-230-item" :ref="'R'+item.id+child.childId" :id="item.id">
                {{item.id+"R"+child.childId}}
                <div :id="item.id" class="circleTop" @click="clickCircleTop($event)"></div>
                <div :id="item.id" class="circleBottom" @click="clickCircleBottom($event)"></div>
            </div>
        </div> 
    </div>
</template>

<script>
  
import { LeaderLine } from "./leader-line.min.js"
import { PlainDraggable } from "./plain-draggable.min.js"

export default {
    name: 'anli1',
    data () {
        return {
            // arrBlock:[],
            // arrLine:[],
            // line1:{},
            // line2:{},
            // draggable:{},
            // draggable2:{},

            arrRow:[{
                id:1,
                child:[
                    // {childId:1,line:{},info:{}},
                    // {childId:2,line:{},info:{}},
                    ]
                },{
                id:2,
                child:[
                    // {childId:1,line:{},info:{}},
                    // {childId:2,line:{},info:{}}
                    ]
                },{
                id:3,
                child:[
                    // {childId:1,line:{},info:{}},
                    // {childId:2,line:{},info:{}}
                    ]
                },{
                id:4,
                child:[
                    // {childId:1,line:{},info:{}},
                    // {childId:2,line:{},info:{}}
                    ]
                },
            ],
            arrBlock:[],
            arrLine:[],
            line1:{},
            line2:{},
            draggable:{},
            draggable2:{},

        }
    },
    methods: {
        init:function(){
            var elmItems = []
            var that = this

            this.arrRow[0].child.map((item)=>{
                let a = "R1"+item.childId
                elmItems.push(this.$refs[a][0])
            })
                var rect = this.$refs.R11[0].getBoundingClientRect()
                var itemWidth = rect.width
                var itemsTop = elmItems.map(function(v, i) {
                    return Math.round(rect.left + window.pageXOffset + rect.width * i);
                })
                var items = [];

            function sort(targetItem, top) {
                if(that.arrLine.length!==0){
                    for(let i = 0 ; i < that.arrLine.length;i++){
                        that.arrLine[i].position();
                    }
                }
                var curIndex = items.indexOf(targetItem)
                // console.log(curIndex)
                var newIndex = itemsTop.indexOf(Math.round(top));

                if (newIndex !== -1 && newIndex !== curIndex) {
                console.log(items)
                items.splice(newIndex, 0, items.splice(curIndex, 1)[0]);
                items.forEach(function(item, i) {
                    if (item !== targetItem) { item.left = itemsTop[i]; }
                });
                }
            }

            items = elmItems.map(function(elmItem) {
                return new PlainDraggable(elmItem, {
                snap: {
                    x: {step: itemWidth},
                    side: 'start'
                },
                onDrag: function(moveTo) {
                    if (!moveTo.snapped) { 
                        if(that.arrLine.length!==0){
                            for(let i = 0 ; i < that.arrLine.length;i++){
                                that.arrLine[i].position();
                            }
                        }
                        return false; 
                    }
                    sort(this, moveTo.left);
                    return true;
                },
                onDragEnd:function(){
                    setTimeout(()=>{
                        if(that.arrLine.length!==0){
                            for(let i = 0 ; i < that.arrLine.length;i++){
                                that.arrLine[i].position();
                            }
                        }
                    },500)
                },
                // onMove:function(){

                // }
                });
            });
        },
        clickCircleTop:function(e){
            this.line1 = e
            // this.init()
        },
        clickCircleBottom:function(e){
            this.line2 = e
            if(this.line1&&this.line2){
                this.$nextTick(()=>{
                    if(this.line2.target.id-this.line1.target.id==1){
                        this.addLine(this.line1.target,this.line2.target)
                    }
                })
            }
        },
        addBlock:function(id){
            var childId =''
            this.arrRow.map((item)=>{
                if(item.id == id){
                    let childLength = (item.child.length)-1
                    if(item.child.length==0){
                        childId = 1
                    }else{
                        childId = (item.child[childLength].childId)+1
                    }
                    return item.child.length==0?item.child.push({childId:1}):item.child.push({childId:item.child[item.child.length-1].childId+1})
                }
            })
            // if(this.arrBlock.length==0){
            //     this.arrBlock.push(1)
            // }else{
            //     this.arrBlock.push(this.arrBlock[this.arrBlock.length-1]+1)
            // }
            // let newNum = this.arrBlock[this.arrBlock.length-1]


            this.$nextTick(()=>{
                // console.log(id)
                // console.log(childId)
                // let that = this
                // let draggable = new PlainDraggable(this.$refs['R'+id+""+childId][0]);
                // draggable.snap = {x: {step: '100px', gravity: 100}};
                // draggable.onMove = function(newPosition) {
                //     if(that.arrLine.length!==0){
                //         for(let i = 0 ; i < that.arrLine.length;i++){

                //             that.arrLine[i].position();
                //         }
                //     }
                // };
            this.init()
            })
            
        },
        addLine:function(block,block2){
            let line = new LeaderLine(block, block2, {
                size:3,
                color:"#f60",
                startSocket: 'bottom', 
                endSocket: 'top',
                hide: true,
                path:'straight',
                showEffectName:'draw',
            });
            line.show(['draw'])
            this.arrLine.push(line)
            this.line1={}
            this.line2={}
            console.log(this.arrLine)
        }
    },
    mounted(){
    }
}
</script>

<style lang='scss'>
    .flex{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .box{
        width: 100vw;
        height:100px;
       margin-top: 10vh;
       position: relative;
    }
    .circleTop{
        width: 20px;height: 20px;
        background: #fff;
        border: 1px solid #E6E6E6;
        position: absolute;
        bottom: 0px;
        left: 50%;
        border-radius: 50%;
        transform: translate(-50%,50%)
    }
    .circleBottom{
        width: 20px;height: 20px;
        background: #fff;
        border: 1px solid #E6E6E6;
        position: absolute;
        top: 0px;
        left: 50%;
        border-radius: 50%;
        transform: translate(-50%,-50%)
    }
    .draggable{
        width: 30%;
        margin: 0 auto;
        float: left;
        height:100px;
         background:rgba(255,255,255,1);
        box-shadow:0px 0px 10px 0px rgba(0, 0, 0, 0.05);
        border-radius:10px;
        position: relative
    }


    .ex-230-item {
        display: block;
        text-align: center;

        position: relative;

        transition-property: transform;

        transition-duration: 0.1s;

        transition-timing-function: ease-in;

        transform: translateZ(0);

    }
</style>