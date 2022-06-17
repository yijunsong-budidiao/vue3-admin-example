var e=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,d=(a,l,t)=>l in a?e(a,l,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[l]=t;import{_ as i,d as n,r as u,a as s,b as c,o as p,e as m,f as g,w as y,m as f,n as b,l as v,E as h,g as V}from"./index-a5ef5672.js";function _(e,a,l){if(""===a&&l("请输入手机号码"),/^(((13[0-9]{1})|(15[0-9]{1})|(16[0-9]{1})|(17[3-8]{1})|(18[0-9]{1})|(19[0-9]{1})|(14[5-7]{1}))+\d{8})$/.test(a))return l();l(new Error("请输入正确的手机号码"))}const w={class:"content-box"},P=(e=>(f("data-v-5bc06104"),e=e(),b(),e))((()=>V("span",{class:"text-gray-500"},"-",-1))),A=v("Create"),k=v("Reset"),O=n({name:"dynamicForm"}),x=n((j=((e,a)=>{for(var l in a||(a={}))r.call(a,l)&&d(e,l,a[l]);if(t)for(var l of t(a))o.call(a,l)&&d(e,l,a[l]);return e})({},O),a(j,l({setup(e){const a=u(),l=s({name:"Joy-Admin",phone:"",region:"",date1:"",date2:"",delivery:!1,resource:"",desc:""}),t=s({name:[{required:!0,message:"Please input Activity name",trigger:"blur"},{min:3,max:5,message:"Length should be 3 to 5",trigger:"blur"}],phone:[{required:!0,validator:_,trigger:"blur"}],region:[{required:!0,message:"Please select Activity zone",trigger:"change"}],date1:[{type:"date",required:!0,message:"Please pick a date",trigger:"change"}],date2:[{type:"date",required:!0,message:"Please pick a time",trigger:"change"}],resource:[{required:!0,message:"Please select activity resource",trigger:"change"}],desc:[{required:!0,message:"Please input activity form",trigger:"blur"}]});return(e,r)=>{const o=c("el-input"),d=c("el-form-item"),i=c("el-option"),n=c("el-select"),u=c("el-date-picker"),s=c("el-col"),f=c("el-time-picker"),b=c("el-switch"),v=c("el-radio"),V=c("el-radio-group"),_=c("el-button"),O=c("el-form");return p(),m("div",w,[g(O,{ref_key:"ruleFormRef",ref:a,model:l,rules:t,"label-width":"140px"},{default:y((()=>[g(d,{label:"Activity name",prop:"name"},{default:y((()=>[g(o,{modelValue:l.name,"onUpdate:modelValue":r[0]||(r[0]=e=>l.name=e)},null,8,["modelValue"])])),_:1}),g(d,{label:"Activity phone",prop:"phone"},{default:y((()=>[g(o,{modelValue:l.phone,"onUpdate:modelValue":r[1]||(r[1]=e=>l.phone=e),placeholder:"Activity phone"},null,8,["modelValue"])])),_:1}),g(d,{label:"Activity zone",prop:"region"},{default:y((()=>[g(n,{modelValue:l.region,"onUpdate:modelValue":r[2]||(r[2]=e=>l.region=e),placeholder:"Activity zone"},{default:y((()=>[g(i,{label:"Zone one",value:"shanghai"}),g(i,{label:"Zone two",value:"beijing"})])),_:1},8,["modelValue"])])),_:1}),g(d,{label:"Activity time",required:""},{default:y((()=>[g(d,{prop:"date1"},{default:y((()=>[g(u,{modelValue:l.date1,"onUpdate:modelValue":r[3]||(r[3]=e=>l.date1=e),type:"date",placeholder:"Pick a date",style:{width:"100%"}},null,8,["modelValue"])])),_:1}),g(s,{class:"text-center",span:1},{default:y((()=>[P])),_:1}),g(d,{prop:"date2"},{default:y((()=>[g(f,{modelValue:l.date2,"onUpdate:modelValue":r[4]||(r[4]=e=>l.date2=e),placeholder:"Pick a time",style:{width:"100%"}},null,8,["modelValue"])])),_:1})])),_:1}),g(d,{label:"Instant delivery",prop:"delivery"},{default:y((()=>[g(b,{modelValue:l.delivery,"onUpdate:modelValue":r[5]||(r[5]=e=>l.delivery=e)},null,8,["modelValue"])])),_:1}),g(d,{label:"Resources",prop:"resource"},{default:y((()=>[g(V,{modelValue:l.resource,"onUpdate:modelValue":r[6]||(r[6]=e=>l.resource=e)},{default:y((()=>[g(v,{label:"Sponsorship"}),g(v,{label:"Venue"})])),_:1},8,["modelValue"])])),_:1}),g(d,{label:"Activity form",prop:"desc"},{default:y((()=>[g(o,{modelValue:l.desc,"onUpdate:modelValue":r[7]||(r[7]=e=>l.desc=e),type:"textarea"},null,8,["modelValue"])])),_:1}),g(d,null,{default:y((()=>[g(_,{type:"primary",onClick:r[8]||(r[8]=e=>(async e=>{e&&await e.validate(((e,a)=>{e&&h.success("提交的数据为 : "+JSON.stringify(l))}))})(a.value))},{default:y((()=>[A])),_:1}),g(_,{onClick:r[9]||(r[9]=e=>{var l;(l=a.value)&&l.resetFields()})},{default:y((()=>[k])),_:1})])),_:1})])),_:1},8,["model","rules"])])}}}))));var j,q=i(x,[["__scopeId","data-v-5bc06104"],["__file","/home/runner/work/Joy-Admin/Joy-Admin/src/views/form/validateForm/index.vue"]]);export{q as default};