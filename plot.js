initChart(){
    let option = {
        title:{
            text:''
        },
        xAxis: {
            type: 'category',
            data:[],
            axisLabel: {
                fontSize: 12,
                rotate:40, // 文本旋转角度
            },
        },
        yAxis: {
            name:'Median RTT(ms)',
            max:80,
            min:0,
            type: 'value',
            data:[],
            nameRotate: 90,
            nameLocation:'right',
            align:'right',
            nameTextStyle:{
                fontSize:14,
                padding:[-50,0,0,-50],
                verticalAlign: 'top', // top名称显示在坐标轴外，bottom显示在坐标轴内部
            },

        },
        tooltip:{
            trigger:'axis',
            textStyle:{
                align:'left'
            }
        },
        toolbox: {
            feature: {
            dataZoom: {
                yAxisIndex: 'none'
            },
            restore: {},
            saveAsImage: {}
            }
        },
        grid:{
            top:180,
            right:0,
            left:80
        },
        legend: {
            data: legend_list,
            left: '7%',
            top:'9%',
            textStyle: {
                color: "#666666"
            },
            itemWidth: 15,
            itemHeight: 10,
            itemGap: 15
        },
        series: []
    };
    this.$axios.post('/data/list',{
        country:this.country,
        source:this.source,
        period:this.period,
        metric:this.metric
    }).then(res=>{
        this.list = res.data;
        for(let i=0;i<this.list.length;i++){
            option.title.text = this.list[i].title;
            option.legend = this.list[i].legend;
            option.xAxis = this.list[i].xAxis;
            option.series = this.list[i].map(item=>{
                return {
                    name:item.name,
                    value:item.value,
                    type:"line"
                }
            });
            this.$echarts.init(this.$refs[`chart${i+1}`]).setOption(option);
        }
    });
}

share(){
    this.$axios.post('/share',{
        country:this.country,
        source:this.source,
        period:this.period,
        metric:this.metric
    }).then(res=>{
        console.log(res);
    })
}

