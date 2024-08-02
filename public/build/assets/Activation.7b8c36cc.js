import{L as h}from"./Auth.1496f853.js";import{H as b,L as f,r as l,o,c as n,a as c,w as d,b as s,j as g,g as i,t,d as _,F as v}from"./app.a6635da7.js";import{_ as k}from"./_plugin-vue_export-helper.cdc0426e.js";const $={layout:h,components:{Head:b,Link:f},props:{errors:Object,session:Object,user:Object}},w={class:"authentication-reset-password d-flex align-items-center justify-content-center"},y={class:"row"},A={class:"col-12 col-lg-10 mx-auto"},L={class:"card"},j={class:"row g-0"},N={class:"col-lg-12 border-end"},H={class:"card-body"},V={class:"p-5"},B=s("h4",{class:"mt-5 font-weight-bold"},"Aktivasi Akun",-1),C=s("p",{class:"text-muted"},"Pastikan data dibawah ini adalah nama dan email anda.",-1),O={class:"mb-3 mt-0"},S={key:0,class:"alert alert-danger border-0"},D=s("i",{class:"fa fa-exclamation-triangle"},null,-1),E={key:1,class:"alert alert-success border-0"},F=s("i",{class:"fa fa-exclamation-triangle"},null,-1),M={class:"mb-3 mt-0"},T=s("label",{class:"form-label"},"Nama",-1),x={class:"mb-3"},K=s("label",{class:"form-label"},"Email",-1),P={class:"d-grid gap-2"},U=s("br",null,null,-1),q=i("Klik Untuk Mengaktifkan Akun");function z(e,r,p,G,I,J){const m=l("Head"),u=l("Link");return o(),n(v,null,[c(m,null,{default:d(()=>{var a;return[s("title",null,t((a=e.$page.props.setting.app_name)!=null?a:"Atur Setting Terlebih Dahulu")+" - Aktivasi",1)]}),_:1}),s("div",w,[s("div",y,[s("div",A,[s("div",L,[s("div",j,[s("div",N,[s("div",H,[s("form",{onSubmit:r[0]||(r[0]=g((...a)=>e.submit&&e.submit(...a),["prevent"])),class:"row g-3"},[s("div",V,[B,C,s("div",O,[e.$page.props.session.error?(o(),n("div",S,[D,i(" "+t(e.$page.props.session.error),1)])):_("",!0),e.$page.props.session.success?(o(),n("div",E,[F,i(" "+t(e.$page.props.session.success),1)])):_("",!0)]),s("div",M,[T,s("p",null,t(e.$props.user.name),1)]),s("div",x,[K,s("p",null,t(e.$props.user.email),1)]),s("div",P,[U,c(u,{href:`/user/${p.user.id}/activation/actived`,class:"btn btn-primary btn-sm"},{default:d(()=>[q]),_:1},8,["href"])])])],32)])])])])])])])],64)}const X=k($,[["render",z]]);export{X as default};
