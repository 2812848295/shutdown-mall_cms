"use strict";(self["webpackChunktyp_backstage"]=self["webpackChunktyp_backstage"]||[]).push([[566],{99217:function(e,t,a){a.d(t,{Z:function(){return g}});var l=a(66252);const n={class:"page-modal"},o={class:"dialog-footer"},i=(0,l.Uk)("取 消"),d=(0,l.Uk)("确 定");function r(e,t,a,r,c,u){const s=(0,l.up)("hy-form"),f=(0,l.up)("el-button"),p=(0,l.up)("el-dialog");return(0,l.wg)(),(0,l.iD)("div",n,[(0,l.Wm)(p,{title:e.modalConfig.title,modelValue:e.dialogVisible,"onUpdate:modelValue":t[2]||(t[2]=t=>e.dialogVisible=t),width:"30%",center:"","destroy-on-close":""},{footer:(0,l.w5)((()=>[(0,l._)("span",o,[(0,l.Wm)(f,{onClick:t[1]||(t[1]=t=>e.dialogVisible=!1)},{default:(0,l.w5)((()=>[i])),_:1}),(0,l.Wm)(f,{type:"primary",onClick:e.handleConfirmClick},{default:(0,l.w5)((()=>[d])),_:1},8,["onClick"])])])),default:(0,l.w5)((()=>[(0,l.Wm)(s,(0,l.dG)(e.modalConfig,{modelValue:e.formData,"onUpdate:modelValue":t[0]||(t[0]=t=>e.formData=t)}),null,16,["modelValue"]),(0,l.WI)(e.$slots,"default")])),_:3},8,["title","modelValue"])])}var c=a(2262),u=a(49409),s=a(22626),f=(0,l.aZ)({components:{HyForm:s.Z},props:{modalConfig:{type:Object,required:!0},defaultInfo:{type:Object,default:()=>({})},otherInfo:{type:Object,default:()=>({})},pageName:{type:String,required:!0}},setup(e){const t=(0,u.oR)(),a={},n=(0,c.iH)({...a});(0,l.YP)((()=>e.defaultInfo),(t=>{for(const a of e.modalConfig.formItems)n.value[`${a.field}`]=t[`${a.field}`]}));const o=(0,c.iH)(!1),i=()=>{o.value=!1,Object.keys(e.defaultInfo).length?t.dispatch("system/editPageDataAction",{pageName:e.pageName,queryInfo:{...n.value,...e.otherInfo},id:e.defaultInfo.id}):t.dispatch("system/newPageDataAction",{pageName:e.pageName,queryInfo:{...n.value,...e.otherInfo}})};return{formData:n,dialogVisible:o,handleConfirmClick:i}}}),p=a(83744);const m=(0,p.Z)(f,[["render",r]]);var h=m,g=h},27680:function(e,t,a){a.d(t,{S:function(){return n}});var l=a(2262);const n=(e,t)=>{const a=(0,l.iH)({}),n=(0,l.iH)(),o=()=>{a.value={},n.value&&(n.value.dialogVisible=!0),e&&e()},i=e=>{a.value={...e},n.value&&(n.value.dialogVisible=!0),t&&t(e)};return[a,n,o,i]}},92136:function(e,t,a){a.r(t),a.d(t,{default:function(){return b}});var l=a(66252);const n={class:"role"};function o(e,t,a,o,i,d){const r=(0,l.up)("page-search"),c=(0,l.up)("page-content"),u=(0,l.up)("el-tree"),s=(0,l.up)("page-modal");return(0,l.wg)(),(0,l.iD)("div",n,[(0,l.Wm)(r,{searchConfig:e.searchFormConfig,onQueryBtnClick:e.handleQueryClick,onResetBtnClick:e.handleResetClick},null,8,["searchConfig","onQueryBtnClick","onResetBtnClick"]),(0,l.Wm)(c,{ref:"pageContentRef",pageName:"role",contentConfig:e.contentTableConfig,onNewBtnClick:e.handleNewData,onEditBtnClick:e.handleEditData},null,8,["contentConfig","onNewBtnClick","onEditBtnClick"]),(0,l.Wm)(s,{ref:"pageModalRef",modalConfig:e.modalConfig,defaultInfo:e.modalInfo,pageName:"role",otherInfo:e.otherInfo},{default:(0,l.w5)((()=>[(0,l.Wm)(u,{class:"menu-tree","check-strictly":!1,ref:"elTreeRef",data:e.roleMenus,"show-checkbox":"","node-key":"id",onCheck:e.handleMenuCheckChange,props:{label:"name",children:"children"}},null,8,["data","onCheck"])])),_:1},8,["modalConfig","defaultInfo","otherInfo"])])}var i=a(2262),d=a(49409),r=a(46781),c=a(65331),u=a(50005),s=a(99217),f=a(53671),p=a(27680);const m={formItems:[{field:"name",type:"input",label:"角色名称",placeHolder:"请输入角色名称",rules:[]},{field:"intro",type:"input",label:"权限介绍",placeHolder:"请输入权限介绍",rules:[]},{field:"createAt",type:"datepicker",label:"创建时间",rules:[],otherOption:{startPlaceholder:"开始时间",endPlaceholder:"结束时间",type:"daterange"}}],labelWidth:"100px",itemStyle:{padding:"10px 40px"},colLayout:{span:8}},h={title:"角色列表",newBtnTitle:"新建角色",propList:[{prop:"name",label:"角色名称",minWidth:"120"},{prop:"intro",label:"角色权限",minWidth:"120"},{prop:"createAt",label:"创建时间",minWidth:"250",slotName:"create"},{prop:"updateAt",label:"更新时间",minWidth:"250",slotName:"update"},{label:"操作",minWidth:"120",slotName:"handler"}],showIndexColumn:!0,showSelectColumn:!0},g={title:"新建角色",formItems:[{field:"name",type:"input",label:"角色名称",placeHolder:"请输入角色名称"},{field:"intro",type:"input",label:"角色描述",placeHolder:"请输入角色描述"}],colLayout:{span:24},itemStyle:{padding:0}};var C=(0,l.aZ)({name:"role",components:{PageSearch:c.Z,PageContent:u.Z,PageModal:s.Z},setup(){const[e,t,a]=(0,f.Y)(),n=(0,i.iH)(),o=e=>{(0,l.Y3)((()=>{const t=(0,r.ko)(e.menuList);n.value?.setCheckedKeys(t,!0)}))},[c,u,s,C]=(0,p.S)(void 0,o),k=(0,i.iH)({}),y=(e,t)=>{const a=t.checkedKeys,l=t.halfCheckedKeys,n=[...a,...l];console.log(n),k.value={menuList:n}},b=(0,d.oR)(),v=(0,l.Fl)((()=>b.state.entireMenus));return{searchFormConfig:m,contentTableConfig:h,pageContentRef:e,handleQueryClick:t,handleResetClick:a,modalConfig:g,modalInfo:c,pageModalRef:u,handleNewData:s,handleEditData:C,roleMenus:v,elTreeRef:n,handleMenuCheckChange:y,otherInfo:k}}}),k=a(83744);const y=(0,k.Z)(C,[["render",o],["__scopeId","data-v-0c0016a4"]]);var b=y}}]);
//# sourceMappingURL=566.c84da25e.js.map