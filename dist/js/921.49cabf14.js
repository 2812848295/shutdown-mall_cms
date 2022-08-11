"use strict";(self["webpackChunktyp_backstage"]=self["webpackChunktyp_backstage"]||[]).push([[921],{22626:function(e,t,a){a.d(t,{Z:function(){return m}});var l=a(66252),o=a(3577);const n={class:"hy-form"},i={class:"header"},r={class:"footer"};function s(e,t,a,s,d,p){const u=(0,l.up)("el-input"),c=(0,l.up)("el-option"),g=(0,l.up)("el-select"),m=(0,l.up)("el-date-picker"),f=(0,l.up)("el-form-item"),y=(0,l.up)("el-col"),w=(0,l.up)("el-row"),h=(0,l.up)("el-form");return(0,l.wg)(),(0,l.iD)("div",n,[(0,l._)("div",i,[(0,l.WI)(e.$slots,"header",{},void 0,!0)]),(0,l.Wm)(h,{"label-width":e.labelWidth},{default:(0,l.w5)((()=>[(0,l.Wm)(w,null,{default:(0,l.w5)((()=>[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.formItems,((t,a)=>((0,l.wg)(),(0,l.j4)(y,(0,o.normalizeProps)((0,l.dG)({key:a},e.colLayout)),{default:(0,l.w5)((()=>[t.isHidden?(0,l.kq)("",!0):((0,l.wg)(),(0,l.j4)(f,{key:0,label:t.label,rules:t.rules,class:"form-item",style:(0,o.normalizeStyle)(e.itemStyle)},{default:(0,l.w5)((()=>["input"===t.type||"password"===t.type?((0,l.wg)(),(0,l.j4)(u,{key:0,modelValue:e.formData[`${t.field}`],"onUpdate:modelValue":a=>e.formData[`${t.field}`]=a,placeholder:t.placeHolder,"show-password":"password"===t.type},null,8,["modelValue","onUpdate:modelValue","placeholder","show-password"])):"select"===t.type?((0,l.wg)(),(0,l.j4)(g,{key:1,modelValue:e.formData[`${t.field}`],"onUpdate:modelValue":a=>e.formData[`${t.field}`]=a,placeholder:t.placeHolder,style:{width:"100%"}},{default:(0,l.w5)((()=>[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(t.options,(e=>((0,l.wg)(),(0,l.j4)(c,{key:e.value,value:e.value},{default:(0,l.w5)((()=>[(0,l.Uk)((0,o.toDisplayString)(e.label),1)])),_:2},1032,["value"])))),128))])),_:2},1032,["modelValue","onUpdate:modelValue","placeholder"])):"datepicker"===t.type?((0,l.wg)(),(0,l.j4)(m,(0,l.dG)({key:2,modelValue:e.formData[`${t.field}`],"onUpdate:modelValue":a=>e.formData[`${t.field}`]=a},t.otherOption,{style:{width:"100%"}}),null,16,["modelValue","onUpdate:modelValue"])):(0,l.kq)("",!0)])),_:2},1032,["label","rules","style"]))])),_:2},1040)))),128))])),_:1})])),_:1},8,["label-width"]),(0,l._)("div",r,[(0,l.WI)(e.$slots,"footer",{},void 0,!0)])])}var d=a(2262),p=(0,l.aZ)({props:{modelValue:{type:Object},labelWidth:{type:String,default:()=>"80px"},formItems:{type:Array,default:()=>[]},itemStyle:{type:Object,default:()=>({padding:"10px 40px"})},colLayout:{type:Object,default:()=>({xl:6,lg:8,md:12,sm:24,xs:24})}},emit:["update:modelValue"],setup(e,{emit:t}){const a=(0,d.iH)({...e.modelValue});return(0,l.YP)(a,(e=>{t("update:modelValue",e)}),{deep:!0}),{formData:a}}}),u=a(83744);const c=(0,u.Z)(p,[["render",s],["__scopeId","data-v-5b8a59ce"]]);var g=c,m=g},50005:function(e,t,a){a.d(t,{Z:function(){return N}});var l=a(66252),o=a(3577);const n={class:"page-content"},i={class:"handler"},r=(0,l.Uk)(" 编辑 "),s=(0,l.Uk)(" 删除 ");function d(e,t,a,d,p,u){const c=(0,l.up)("el-button"),g=(0,l.up)("hy-table");return(0,l.wg)(),(0,l.iD)("div",n,[(0,l.Wm)(g,(0,l.dG)({totalCount:e.totalCount,listData:e.pageListData},e.contentConfig,{page:e.pageInfo,"onUpdate:page":t[0]||(t[0]=t=>e.pageInfo=t)}),(0,l.Nv)({headerHandler:(0,l.w5)((()=>[e.isCreate?((0,l.wg)(),(0,l.j4)(c,{key:0,type:"primary",size:"default",onClick:e.handleNewData},{default:(0,l.w5)((()=>[(0,l.Uk)((0,o.toDisplayString)(e.contentConfig.newBtnTitle??"新建数据"),1)])),_:1},8,["onClick"])):(0,l.kq)("",!0)])),status:(0,l.w5)((t=>[(0,l.Wm)(c,{type:t.row.enable?"success":"danger",size:"small",plain:""},{default:(0,l.w5)((()=>[(0,l.Uk)((0,o.toDisplayString)(e.$filters.showStatus(t.row.enable)),1)])),_:2},1032,["type"])])),create:(0,l.w5)((t=>[(0,l.Uk)((0,o.toDisplayString)(e.$filters.formatTime(t.row.createAt)),1)])),update:(0,l.w5)((t=>[(0,l.Uk)((0,o.toDisplayString)(e.$filters.formatTime(t.row.updateAt)),1)])),handler:(0,l.w5)((t=>[(0,l._)("div",i,[e.isUpdate?((0,l.wg)(),(0,l.j4)(c,{key:0,type:"primary",icon:"EditPen",size:"small",link:"",onClick:a=>e.handleEditClick(t.row)},{default:(0,l.w5)((()=>[r])),_:2},1032,["onClick"])):(0,l.kq)("",!0),e.isDelete?((0,l.wg)(),(0,l.j4)(c,{key:1,type:"primary",link:"",icon:"DeleteFilled",size:"small",onClick:a=>e.handleDeleteClick(t.row)},{default:(0,l.w5)((()=>[s])),_:2},1032,["onClick"])):(0,l.kq)("",!0)])])),_:2},[(0,l.Ko)(e.otherPropSlots,(t=>({name:t.slotName,fn:(0,l.w5)((a=>[t.slotName?(0,l.WI)(e.$slots,t.slotName,{key:0,row:a.row},void 0,!0):(0,l.kq)("",!0)]))})))]),1040,["totalCount","listData","page"])])}var p=a(2262),u=a(49409);function c(e,t){const a=(0,u.oR)(),l=a.state.login.permissions,o=`${e}:${t}`;return!!l.find((e=>-1!==e.indexOf(o)))}const g={class:"hy-table"},m={class:"header"},f={class:"title"},y={class:"handler"},w={key:0,class:"footer"};function h(e,t,a,n,i,r){const s=(0,l.up)("el-table-column"),d=(0,l.up)("el-table"),p=(0,l.up)("el-pagination");return(0,l.wg)(),(0,l.iD)("div",g,[(0,l._)("div",m,[(0,l.WI)(e.$slots,"header",{},(()=>[(0,l._)("div",f,(0,o.toDisplayString)(e.title),1),(0,l._)("div",y,[(0,l.WI)(e.$slots,"headerHandler",{},void 0,!0)])]),!0)]),(0,l.Wm)(d,(0,l.dG)({data:e.listData,border:"",onSelectionChange:e.selectionChange},e.childrenProps),{default:(0,l.w5)((()=>[e.showSelectColumn?((0,l.wg)(),(0,l.j4)(s,{key:0,type:"selection",align:"center",width:"60"})):(0,l.kq)("",!0),e.showIndexColumn?((0,l.wg)(),(0,l.j4)(s,{key:1,type:"index",label:"序号",align:"center",width:"80"})):(0,l.kq)("",!0),((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.propList,(t=>((0,l.wg)(),(0,l.j4)(s,(0,l.dG)({key:t.prop},t,{align:"center","show-overflow-tooltip":""}),{default:(0,l.w5)((a=>[(0,l.WI)(e.$slots,t.slotName,{row:a.row},(()=>[(0,l.Uk)((0,o.toDisplayString)(a.row[t.prop]),1)]),!0)])),_:2},1040)))),128)),(0,l.WI)(e.$slots,"default",{},void 0,!0)])),_:3},16,["data","onSelectionChange"]),e.showFooter?((0,l.wg)(),(0,l.iD)("div",w,[(0,l.WI)(e.$slots,"footer",{},(()=>[(0,l.Wm)(p,{onSizeChange:e.handleSizeChange,onCurrentChange:e.handleCurrentChange,"current-page":e.page.currentPage,"page-size":e.page.pageSize,total:e.totalCount,"page-sizes":[10,20,30,40],layout:"total, sizes, prev, pager, next, jumper"},null,8,["onSizeChange","onCurrentChange","current-page","page-size","total"])]),!0)])):(0,l.kq)("",!0)])}var k=(0,l.aZ)({props:{title:{type:String,default:"表格数据"},showIndexColumn:{type:Boolean,default:!0},showSelectColumn:{type:Boolean,default:!1},showFooter:{type:Boolean,default:!0},listData:{type:Array,default:()=>[]},propList:{type:Array,default:()=>[]},childrenProps:{type:Object,default:()=>({})},totalCount:{type:Number,default:0},page:{type:Object,default:()=>({currentPage:0,pageSize:10})}},emits:["selectionChange","update:page"],setup(e,{emit:t}){const a=a=>{e.showSelectColumn&&t("selectionChange",a)},l=a=>{t("update:page",{...e.page,currentPage:a})},o=a=>{t("update:page",{...e.page,pageSize:a})};return{selectionChange:a,handleCurrentChange:l,handleSizeChange:o}}}),C=a(83744);const v=(0,C.Z)(k,[["render",h],["__scopeId","data-v-0825bed8"]]);var D=v,b=D,S=(0,l.aZ)({components:{HyTable:b},props:{contentConfig:{type:Object,required:!0},pageName:{type:String,required:!0}},emits:["newBtnClick","editBtnClick"],setup(e,{emit:t}){const a=c(e.pageName,"create"),o=c(e.pageName,"delete"),n=c(e.pageName,"update"),i=c(e.pageName,"query"),r=(0,u.oR)(),s=(0,p.iH)({currentPage:1,pageSize:10});(0,l.YP)(s,(()=>g()));let d={};const g=(t={})=>{i&&(d=t,r.dispatch("system/getPageListDataAction",{pageName:e.pageName,queryInfo:{offset:(s.value.currentPage-1)*s.value.pageSize,size:s.value.pageSize,...t}}))};g();const m=(0,l.Fl)((()=>r.getters["system/pageListData"](e.pageName))),f=(0,l.Fl)((()=>r.getters["system/pageListDataCount"](e.pageName))),y=(0,l.Fl)((()=>e.contentConfig.propList.filter((e=>"status"!==e.slotName&&("create"!==e.slotName&&("update"!==e.slotName&&"handler"!==e.slotName)))))),w=t=>{r.dispatch("system/deletePageDataAction",{pageName:e.pageName,queryInfo:{offset:s.value.currentPage*s.value.pageSize,size:s.value.pageSize,...d},id:t.id})},h=()=>{t("newBtnClick")},k=e=>{t("editBtnClick",e)};return{pageInfo:s,pageListData:m,totalCount:f,getPageData:g,otherPropSlots:y,handleDeleteClick:w,handleEditClick:k,handleNewData:h,isCreate:a,isUpdate:n,isDelete:o}}});const _=(0,C.Z)(S,[["render",d],["__scopeId","data-v-51d28702"]]);var z=_,N=z},65331:function(e,t,a){a.d(t,{Z:function(){return m}});var l=a(66252);const o={class:"btns"},n=(0,l.Uk)("重置"),i=(0,l.Uk)("查询");function r(e,t,a,r,s,d){const p=(0,l.up)("el-button"),u=(0,l.up)("hy-form");return(0,l.wg)(),(0,l.iD)("div",null,[(0,l.Wm)(u,(0,l.dG)(e.searchConfig,{modelValue:e.formData,"onUpdate:modelValue":t[0]||(t[0]=t=>e.formData=t)}),{footer:(0,l.w5)((()=>[(0,l._)("div",o,[(0,l.Wm)(p,{size:"default",icon:"Refresh",onClick:e.handleResetClick},{default:(0,l.w5)((()=>[n])),_:1},8,["onClick"]),(0,l.Wm)(p,{type:"primary",size:"default",icon:"Search",onClick:e.handleQueryClick},{default:(0,l.w5)((()=>[i])),_:1},8,["onClick"])])])),_:1},16,["modelValue"])])}var s=a(2262),d=a(22626),p=(0,l.aZ)({components:{HyForm:d.Z},props:{searchConfig:{type:Object,required:!0},title:{type:String,default:"高级检索"}},emits:["queryBtnClick","resetBtnClick"],setup(e,{emit:t}){const a={},l=e.searchConfig.formItems??[];for(const r of l)a[`${r.field}`]="";const o=(0,s.iH)({...a}),n=()=>{for(const e in a)o.value[`${e}`]=a[e];t("resetBtnClick")},i=()=>{console.log({...o.value}),t("queryBtnClick",o.value)};return{formData:o,handleResetClick:n,handleQueryClick:i}}}),u=a(83744);const c=(0,u.Z)(p,[["render",r],["__scopeId","data-v-99be3982"]]);var g=c,m=g},53671:function(e,t,a){a.d(t,{Y:function(){return o}});var l=a(2262);const o=()=>{const e=(0,l.iH)(),t=t=>{console.log(e.value),e.value?.getPageData(t)},a=()=>{e.value?.getPageData()};return[e,t,a]}}}]);
//# sourceMappingURL=921.49cabf14.js.map