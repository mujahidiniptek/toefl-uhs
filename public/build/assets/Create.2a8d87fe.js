import{L as p}from"./Layout.b71760ab.js";import{L as S,H as P,i as x,r as u,o as l,c as r,a as v,w as f,b as e,j as V,k as c,v as _,n as d,F as h,e as w,t as n,d as m,l as b,m as L,f as C,g as T}from"./app.a6635da7.js";import{S as U}from"./sweetalert2.all.e70935e2.js";import"./index.60715ef7.js";import{_ as B}from"./_plugin-vue_export-helper.cdc0426e.js";const D={layout:p,components:{Link:S,Head:P},props:{errors:Object,categories:Object},setup(){const i=x({category_id:"",name:"",total_choices:"",total_section:"",add_value_category:1,assessment_type:1});return{form:i,submit:()=>{L.Inertia.post("/admin/question-titles",{category_id:i.category_id,name:i.name,total_choices:i.total_choices,total_section:i.total_section,add_value_category:i.add_value_category,assessment_type:i.assessment_type},{onSuccess:t=>{console.log(t),U.fire({title:"Success!",text:"Paket Soal Berhasil Disimpan!.",icon:"success",showConfirmButton:!1,timer:1e3})}})}}}},J={class:"page-wrapper"},N={class:"page-content"},j=C('<div class="page-breadcrumb d-none d-sm-flex align-items-center mb-3"><div class="breadcrumb-title pe-3">Paket Soal</div><div class="ps-3"><nav aria-label="breadcrumb"><ol class="breadcrumb mb-0 p-0"><li class="breadcrumb-item"><a href="javascript:;"><i class="bx bx-home-alt"></i></a></li><li class="breadcrumb-item active" aria-current="page">Tambah Paket Soal</li></ol></nav></div></div>',1),H={class:"card border-top border-0 border-3 border-primary"},K={class:"card-body"},M={class:"d-lg-flex align-items-center"},q={class:"ms-auto"},A=T("Kembali"),F={class:"col-12"},O=e("label",{class:"form-label"},"Kategori",-1),z=e("option",{value:""},"[ Pilih ]",-1),E=["value"],G={key:0,class:"invalid-feedback"},I={class:"col-12"},Y=e("label",{class:"form-label"},"Paket Soal",-1),Q={key:0,class:"invalid-feedback"},R={class:"col-12"},W=e("label",{class:"form-label"},"Jumlah Pilihan Ganda",-1),X={key:0,class:"invalid-feedback"},Z={class:"col-12"},$=e("label",{class:"form-label"},"Jumlah Sesi",-1),ee={key:0,class:"invalid-feedback"},te={class:"col-12"},se=e("label",{class:"form-label"},"Tambahkan Kategori Penilaian",-1),ae=e("option",{value:"1"},"Ya",-1),oe=[ae],ie={key:0,class:"invalid-feedback"},le={class:"col-12"},re=e("label",{class:"form-label"},"Jenis Penilaian",-1),ne=e("option",{value:"1"},"Dihitung Per Kategori Penilaian",-1),ce=[ne],de={key:0,class:"invalid-feedback"},me=e("div",{class:"col-12"},[e("button",{type:"submit",class:"btn btn-primary btn-sm px-5"},"Submit")],-1);function _e(i,a,t,o,be,ue){const y=u("Head"),g=u("Link");return l(),r(h,null,[v(y,null,{default:f(()=>{var s;return[e("title",null,n((s=i.$page.props.setting.app_name)!=null?s:"Atur Setting Terlebih Dahulu")+" - Tambah Paket Soal",1)]}),_:1}),e("div",J,[e("div",N,[j,e("div",H,[e("div",K,[e("div",M,[e("div",q,[v(g,{href:"/admin/question-titles",class:"btn btn-primary btn-sm mt-2 mt-lg-0"},{default:f(()=>[A]),_:1})])]),e("form",{onSubmit:a[6]||(a[6]=V((...s)=>o.submit&&o.submit(...s),["prevent"])),class:"row g-3"},[e("div",F,[O,c(e("select",{"onUpdate:modelValue":a[0]||(a[0]=s=>o.form.category_id=s),class:d([{"is-invalid":t.errors.category_id},"form-select"])},[z,(l(!0),r(h,null,w(t.categories,(s,k)=>(l(),r("option",{key:k,value:s.id},n(s.name),9,E))),128))],2),[[_,o.form.category_id]]),t.errors.category_id?(l(),r("div",G,n(t.errors.category_id),1)):m("",!0)]),e("div",I,[Y,c(e("input",{type:"text",class:d(["form-control",{"is-invalid":t.errors.name}]),"onUpdate:modelValue":a[1]||(a[1]=s=>o.form.name=s),placeholder:"Paket Soal"},null,2),[[b,o.form.name]]),t.errors.name?(l(),r("div",Q,n(t.errors.name),1)):m("",!0)]),e("div",R,[W,c(e("input",{type:"number",class:d(["form-control",{"is-invalid":t.errors.total_choices}]),"onUpdate:modelValue":a[2]||(a[2]=s=>o.form.total_choices=s),placeholder:"Jumlah Pilihan"},null,2),[[b,o.form.total_choices]]),t.errors.total_choices?(l(),r("div",X,n(t.errors.total_choices),1)):m("",!0)]),e("div",Z,[$,c(e("input",{type:"number",class:d(["form-control",{"is-invalid":t.errors.total_section}]),"onUpdate:modelValue":a[3]||(a[3]=s=>o.form.total_section=s),placeholder:"Jumlah Sesi"},null,2),[[b,o.form.total_section]]),t.errors.total_section?(l(),r("div",ee,n(t.errors.total_section),1)):m("",!0)]),e("div",te,[se,c(e("select",{"onUpdate:modelValue":a[4]||(a[4]=s=>o.form.add_value_category=s),class:d([{"is-invalid":t.errors.add_value_category},"form-select"]),disabled:""},oe,2),[[_,o.form.add_value_category]]),t.errors.add_value_category?(l(),r("div",ie,n(t.errors.add_value_category),1)):m("",!0)]),e("div",le,[re,c(e("select",{"onUpdate:modelValue":a[5]||(a[5]=s=>o.form.assessment_type=s),class:d([{"is-invalid":t.errors.assessment_type},"form-select"]),disabled:""},ce,2),[[_,o.form.assessment_type]]),t.errors.assessment_type?(l(),r("div",de,n(t.errors.assessment_type),1)):m("",!0)]),me],32)])])])])],64)}const ke=B(D,[["render",_e]]);export{ke as default};
