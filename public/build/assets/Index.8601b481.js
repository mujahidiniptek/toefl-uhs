import{L as k}from"./Layout.b71760ab.js";import{P as g}from"./Pagination.8d99dda5.js";import{L as f,H as y,i as x,r as c,o as n,c as o,a as d,w as _,b as t,d as u,k as T,l as A,j as L,F as p,e as w,m as V,f as B,t as r,g as C}from"./app.a6635da7.js";import{S as H}from"./sweetalert2.all.e70935e2.js";import{_ as M}from"./_plugin-vue_export-helper.cdc0426e.js";const N={layout:k,components:{Link:f,Head:y,Pagination:g},props:{voucherActivations:Object},setup(){const a=x({token:""});return{submitToken:()=>{H.fire({title:"Perhatian !",text:"Apakah anda yakin akan mengaktifkan token ini ?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Aktivasi Voucher"}).then(s=>{s.isConfirmed&&(V.Inertia.post("/user/voucher-activations",{token:a.token}),a.token="")})},form:a}}},S={class:"page-wrapper"},j={class:"page-content"},P=B('<div class="page-breadcrumb d-none d-sm-flex align-items-center mb-3"><div class="breadcrumb-title pe-3">Transaksi</div><div class="ps-3"><nav aria-label="breadcrumb"><ol class="breadcrumb mb-0 p-0"><li class="breadcrumb-item"><a href="javascript:;"><i class="bx bx-home-alt"></i></a></li><li class="breadcrumb-item active" aria-current="page">Aktivasi Voucher</li></ol></nav></div></div>',1),$={class:"card border-top border-0 border-3 border-primary"},D={class:"card-body"},F={key:0,class:"alert alert-danger border-0"},I=t("i",{class:"fa fa-exclamation-triangle"},null,-1),K=["innerHTML"],U={key:1,class:"alert alert-success border-0"},E=t("i",{class:"fa fa-exclamation-triangle"},null,-1),J=["innerHTML"],O={class:"input-group"},R={class:"card border-top border-0 border-3 border-primary"},q={class:"card-body"},z=t("h6",{class:"card-title"},"Riwayat Aktivasi Voucher",-1),G=t("br",null,null,-1),Q={class:"table-responsive"},W={class:"table mb-0"},X=t("thead",{class:"table-light"},[t("tr",null,[t("th",null,"No"),t("th",null,"Kategori"),t("th",null,"Judul Ujian"),t("th",null,"Token"),t("th",null,"Action")])],-1),Y={key:0},Z=t("td",{colspan:"7",align:"center"},"Belum ada data riwayat aktivasi",-1),tt=[Z],et=C("Kerjakan Soal");function at(a,i,s,l,st,nt){const b=c("Head"),h=c("Link"),v=c("Pagination");return n(),o(p,null,[d(b,null,{default:_(()=>{var e;return[t("title",null,r((e=a.$page.props.setting.app_name)!=null?e:"Atur Setting Terlebih Dahulu")+" - Aktivasi Voucher",1)]}),_:1}),t("div",S,[t("div",j,[P,t("div",$,[t("div",D,[a.$page.props.session.error?(n(),o("div",F,[I,t("div",{innerHTML:a.$page.props.session.error},null,8,K)])):u("",!0),a.$page.props.session.success?(n(),o("div",U,[E,t("div",{innerHTML:a.$page.props.session.success},null,8,J)])):u("",!0),t("div",O,[T(t("input",{type:"text",class:"form-control","onUpdate:modelValue":i[0]||(i[0]=e=>l.form.token=e),placeholder:"Masukan Token...."},null,512),[[A,l.form.token]]),t("button",{class:"btn btn-primary btn-sm",onClick:i[1]||(i[1]=L(e=>l.submitToken(),["prevent"])),type:"button"},"Aktivasi")])])]),t("div",R,[t("div",q,[z,G,t("div",Q,[t("table",W,[X,t("tbody",null,[s.voucherActivations.data.length?u("",!0):(n(),o("tr",Y,tt)),(n(!0),o(p,null,w(s.voucherActivations.data,(e,m)=>(n(),o("tr",{key:m},[t("td",null,r(++m+(s.voucherActivations.current_page-1)*s.voucherActivations.per_page),1),t("td",null,r(e.exam.category.name),1),t("td",null,r(e.exam.title),1),t("td",null,r(e.voucher_token),1),t("td",null,[d(h,{href:`/user/categories/${e.exam.category.id}/exams/${e.exam_id}`,class:"btn btn-primary btn-sm btn-sm"},{default:_(()=>[et]),_:2},1032,["href"])])]))),128))])])]),d(v,{links:s.voucherActivations.links,align:"end"},null,8,["links"])])])])])],64)}const dt=M(N,[["render",at]]);export{dt as default};