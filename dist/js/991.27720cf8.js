"use strict";(self["webpackChunktyp_backstage"]=self["webpackChunktyp_backstage"]||[]).push([[991],{50005:function(e,t,a){a.d(t,{Z:function(){return W}});var n=a(66252),o=a(3577);const l={class:"page-content"},i={class:"handler"},r=(0,n.Uk)(" 编辑 "),s=(0,n.Uk)(" 删除 ");function p(e,t,a,p,d,c){const u=(0,n.up)("el-button"),g=(0,n.up)("hy-table");return(0,n.wg)(),(0,n.iD)("div",l,[(0,n.Wm)(g,(0,n.dG)({totalCount:e.totalCount,listData:e.pageListData},e.contentConfig,{page:e.pageInfo,"onUpdate:page":t[0]||(t[0]=t=>e.pageInfo=t)}),(0,n.Nv)({headerHandler:(0,n.w5)((()=>[e.isCreate?((0,n.wg)(),(0,n.j4)(u,{key:0,type:"primary",size:"default",onClick:e.handleNewData},{default:(0,n.w5)((()=>[(0,n.Uk)((0,o.toDisplayString)(e.contentConfig.newBtnTitle??"新建数据"),1)])),_:1},8,["onClick"])):(0,n.kq)("",!0)])),status:(0,n.w5)((t=>[(0,n.Wm)(u,{type:t.row.enable?"success":"danger",size:"small",plain:""},{default:(0,n.w5)((()=>[(0,n.Uk)((0,o.toDisplayString)(e.$filters.showStatus(t.row.enable)),1)])),_:2},1032,["type"])])),create:(0,n.w5)((t=>[(0,n.Uk)((0,o.toDisplayString)(e.$filters.formatTime(t.row.createAt)),1)])),update:(0,n.w5)((t=>[(0,n.Uk)((0,o.toDisplayString)(e.$filters.formatTime(t.row.updateAt)),1)])),handler:(0,n.w5)((t=>[(0,n._)("div",i,[e.isUpdate?((0,n.wg)(),(0,n.j4)(u,{key:0,type:"primary",icon:"EditPen",size:"small",link:"",onClick:a=>e.handleEditClick(t.row)},{default:(0,n.w5)((()=>[r])),_:2},1032,["onClick"])):(0,n.kq)("",!0),e.isDelete?((0,n.wg)(),(0,n.j4)(u,{key:1,type:"primary",link:"",icon:"DeleteFilled",size:"small",onClick:a=>e.handleDeleteClick(t.row)},{default:(0,n.w5)((()=>[s])),_:2},1032,["onClick"])):(0,n.kq)("",!0)])])),_:2},[(0,n.Ko)(e.otherPropSlots,(t=>({name:t.slotName,fn:(0,n.w5)((a=>[t.slotName?(0,n.WI)(e.$slots,t.slotName,{key:0,row:a.row},void 0,!0):(0,n.kq)("",!0)]))})))]),1040,["totalCount","listData","page"])])}var d=a(2262),c=a(49409);function u(e,t){const a=(0,c.oR)(),n=a.state.login.permissions,o=`${e}:${t}`;return!!n.find((e=>-1!==e.indexOf(o)))}const g={class:"hy-table"},m={class:"header"},h={class:"title"},C={class:"handler"},f={key:0,class:"footer"};function w(e,t,a,l,i,r){const s=(0,n.up)("el-table-column"),p=(0,n.up)("el-table"),d=(0,n.up)("el-pagination");return(0,n.wg)(),(0,n.iD)("div",g,[(0,n._)("div",m,[(0,n.WI)(e.$slots,"header",{},(()=>[(0,n._)("div",h,(0,o.toDisplayString)(e.title),1),(0,n._)("div",C,[(0,n.WI)(e.$slots,"headerHandler",{},void 0,!0)])]),!0)]),(0,n.Wm)(p,(0,n.dG)({data:e.listData,border:"",onSelectionChange:e.selectionChange},e.childrenProps),{default:(0,n.w5)((()=>[e.showSelectColumn?((0,n.wg)(),(0,n.j4)(s,{key:0,type:"selection",align:"center",width:"60"})):(0,n.kq)("",!0),e.showIndexColumn?((0,n.wg)(),(0,n.j4)(s,{key:1,type:"index",label:"序号",align:"center",width:"80"})):(0,n.kq)("",!0),((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.propList,(t=>((0,n.wg)(),(0,n.j4)(s,(0,n.dG)({key:t.prop},t,{align:"center","show-overflow-tooltip":""}),{default:(0,n.w5)((a=>[(0,n.WI)(e.$slots,t.slotName,{row:a.row},(()=>[(0,n.Uk)((0,o.toDisplayString)(a.row[t.prop]),1)]),!0)])),_:2},1040)))),128)),(0,n.WI)(e.$slots,"default",{},void 0,!0)])),_:3},16,["data","onSelectionChange"]),e.showFooter?((0,n.wg)(),(0,n.iD)("div",f,[(0,n.WI)(e.$slots,"footer",{},(()=>[(0,n.Wm)(d,{onSizeChange:e.handleSizeChange,onCurrentChange:e.handleCurrentChange,"current-page":e.page.currentPage,"page-size":e.page.pageSize,total:e.totalCount,"page-sizes":[10,20,30,40],layout:"total, sizes, prev, pager, next, jumper"},null,8,["onSizeChange","onCurrentChange","current-page","page-size","total"])]),!0)])):(0,n.kq)("",!0)])}var y=(0,n.aZ)({props:{title:{type:String,default:"表格数据"},showIndexColumn:{type:Boolean,default:!0},showSelectColumn:{type:Boolean,default:!1},showFooter:{type:Boolean,default:!0},listData:{type:Array,default:()=>[]},propList:{type:Array,default:()=>[]},childrenProps:{type:Object,default:()=>({})},totalCount:{type:Number,default:0},page:{type:Object,default:()=>({currentPage:0,pageSize:10})}},emits:["selectionChange","update:page"],setup(e,{emit:t}){const a=a=>{e.showSelectColumn&&t("selectionChange",a)},n=a=>{t("update:page",{...e.page,currentPage:a})},o=a=>{t("update:page",{...e.page,pageSize:a})};return{selectionChange:a,handleCurrentChange:n,handleSizeChange:o}}}),k=a(83744);const v=(0,k.Z)(y,[["render",w],["__scopeId","data-v-0825bed8"]]);var b=v,D=b,S=(0,n.aZ)({components:{HyTable:D},props:{contentConfig:{type:Object,required:!0},pageName:{type:String,required:!0}},emits:["newBtnClick","editBtnClick"],setup(e,{emit:t}){const a=u(e.pageName,"create"),o=u(e.pageName,"delete"),l=u(e.pageName,"update"),i=u(e.pageName,"query"),r=(0,c.oR)(),s=(0,d.iH)({currentPage:1,pageSize:10});(0,n.YP)(s,(()=>g()));let p={};const g=(t={})=>{i&&(p=t,r.dispatch("system/getPageListDataAction",{pageName:e.pageName,queryInfo:{offset:(s.value.currentPage-1)*s.value.pageSize,size:s.value.pageSize,...t}}))};g();const m=(0,n.Fl)((()=>r.getters["system/pageListData"](e.pageName))),h=(0,n.Fl)((()=>r.getters["system/pageListDataCount"](e.pageName))),C=(0,n.Fl)((()=>e.contentConfig.propList.filter((e=>"status"!==e.slotName&&("create"!==e.slotName&&("update"!==e.slotName&&"handler"!==e.slotName)))))),f=t=>{r.dispatch("system/deletePageDataAction",{pageName:e.pageName,queryInfo:{offset:s.value.currentPage*s.value.pageSize,size:s.value.pageSize,...p},id:t.id})},w=()=>{t("newBtnClick")},y=e=>{t("editBtnClick",e)};return{pageInfo:s,pageListData:m,totalCount:h,getPageData:g,otherPropSlots:C,handleDeleteClick:f,handleEditClick:y,handleNewData:w,isCreate:a,isUpdate:l,isDelete:o}}});const N=(0,k.Z)(S,[["render",p],["__scopeId","data-v-51d28702"]]);var z=N,W=z},36991:function(e,t,a){a.r(t),a.d(t,{default:function(){return c}});var n=a(66252);const o={class:"menu"};function l(e,t,a,l,i,r){const s=(0,n.up)("page-content");return(0,n.wg)(),(0,n.iD)("div",o,[(0,n.Wm)(s,{contentConfig:e.contentTableConfig,pageName:"menu"},null,8,["contentConfig"])])}var i=a(50005);const r={title:"角色列表",propList:[{prop:"name",label:"菜单名称",minWidth:"150"},{prop:"type",label:"级别",minWidth:"80"},{prop:"url",label:"菜单url",minWidth:"120"},{prop:"icon",label:"菜单icon",minWidth:"120"},{prop:"sort",label:"排序",minWidth:"80"},{prop:"permission",label:"权限",minWidth:"150"},{prop:"createAt",label:"创建时间",minWidth:"220",slotName:"create"},{prop:"updateAt",label:"更新时间",minWidth:"220",slotName:"update"},{label:"操作",minWidth:"120",slotName:"handler"}],showIndexColumn:!1,showSelectColumn:!1,showFooter:!1,childrenProps:{rowKey:"id",treeProp:{children:"children"}}};var s=(0,n.aZ)({name:"hymenu",components:{PageContent:i.Z},setup(){return{contentTableConfig:r}}}),p=a(83744);const d=(0,p.Z)(s,[["render",l]]);var c=d}}]);
//# sourceMappingURL=991.27720cf8.js.map