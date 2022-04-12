changeCountry(value){
    this.$axios.get('/country/list',{
        value:value
    }).then(res=>{
        this.country_list = res.data;
    })
},
changeSource(value){
    this.$axios.get('/source/list',{
        value:value
    }).then(res=>{
        this.source_list = res.data;
    })
},
changePeriod(value){
    this.$axios.get('/period/list',{
        value:value
    }).then(res=>{
        this.period_list = res.data;
    })
},
changeMetric(value){
    this.$axios.get('/metric/list',{
        value:value
    }).then(res=>{
        this.metric_list = res.data;
    })
}
