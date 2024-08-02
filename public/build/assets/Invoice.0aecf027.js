import{L as p}from"./Layout.b71760ab.js";import{L as k,H as f,r as m,o as n,c as o,a as r,w as _,b as t,d,t as s,g as l,F as b,e as y,f as x}from"./app.a6635da7.js";import{_ as w}from"./_plugin-vue_export-helper.cdc0426e.js";const T={layout:p,components:{Link:k,Head:f},props:{transaction:Object,banks:Object},methods:{formatPrice(i){return"Rp."+(i/1).toFixed().replace(".",",").toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")}}},P={class:"page-wrapper"},S={class:"page-content"},D=x('<div class="page-breadcrumb d-none d-sm-flex align-items-center mb-3"><div class="breadcrumb-title pe-3">Transaksi</div><div class="ps-3"><nav aria-label="breadcrumb"><ol class="breadcrumb mb-0 p-0"><li class="breadcrumb-item"><a href="javascript:;"><i class="bx bx-home-alt"></i></a></li><li class="breadcrumb-item active" aria-current="page">Detail Transaksi</li></ol></nav></div></div>',1),A={class:"card"},B={class:"card-body"},j={id:"invoice"},F={class:"invoice overflow-auto"},H={style:{"min-width":"600px"}},L={class:"row"},N={class:"col"},V={key:0,class:"badge bg-warning"},K=t("h6",{style:{color:"#000",height:"10px"}},"Menunggu Pembayaran",-1),C=[K],M={key:1,class:"badge bg-success"},O=t("h6",{style:{color:"#fff",height:"10px"}},"Sudah Dibayar, Menunggu Verifikasi Admin",-1),R=[O],E={key:2,class:"badge bg-danger"},W=t("h6",{style:{color:"#fff",height:"10px"}},"Transaksi Gagal",-1),q=[W],G={key:3,class:"badge bg-primary"},I=t("h6",{style:{color:"#fff",height:"10px"}},"Transaksi Selesai",-1),U=[I],Y={class:"col company-details"},z={class:"name"},J={target:"_blank",href:"javascript:;"},Q={class:"row contacts"},X={class:"col invoice-to"},Z=t("div",{class:"text-gray-light"},"Faktur Untuk:",-1),$={class:"to"},tt={class:"address"},st=t("br",null,null,-1),at={class:"email"},et={class:"col invoice-details"},nt={class:"invoice-id"},ot={class:"date"},it={class:"date"},ct=t("thead",null,[t("tr",null,[t("th",null,"#"),t("th",{class:"text-left"},"Deskripsi"),t("th",{class:"text-right"},"Harga"),t("th",{class:"text-right"},"Diskon"),t("th",{class:"text-right"},"Total")])],-1),lt=t("td",{class:"no"},"01",-1),dt={class:"text-left"},rt={class:"unit"},_t={class:"qty"},ht={class:"total"},ut=t("td",{colspan:"2"},null,-1),mt=t("td",{colspan:"2"},"Sub Total",-1),bt=t("tr",null,[t("td",{colspan:"2"}),t("td",{colspan:"2"},"Pajak 0%"),t("td",null,"Rp. 0.00")],-1),gt=t("td",{colspan:"2"},null,-1),vt=t("td",{colspan:"2"},"TOTAL PEMBAYARAN",-1),pt=t("div",{class:"thanks"},"Terimakasih",-1),kt=t("br",null,null,-1),ft=t("h4",{class:"text-center"},"Silakan lakukan pembayaran melalui bank dibawah ini",-1),yt=t("br",null,null,-1),xt={class:"row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-3"},wt={class:"col"},Tt={class:"card border-bottom border-3 border-0"},Pt={style:{height:"75px"},class:"mb-3"},St=["src"],Dt={class:"card-body"},At={class:"card-title"},Bt={class:"card-text"},jt={class:"card-text"},Ft=t("br",null,null,-1),Ht={class:"notices"},Lt=t("div",null,"Perhatian!",-1),Nt={class:"notice"},Vt=l(" Batas waktu pembayaran akan Habis pada 2 hari (2 x 24 jam) dari waktu transaksi, maka lakukan pembayaran & konfirmasi sebelum "),Kt={class:"badge bg-danger"},Ct=t("br",null,null,-1),Mt=t("br",null,null,-1),Ot=l(" Setelah melakukan pembayaran, silakan lakukan konfirmasi melalui Whatsapp di "),Rt=t("b",null,"081212126043",-1),Et=l(" dengan menyertakan nomor faktur serta bukti transfer pembayaran. terimakasih "),Wt=t("h5",null,null,-1),qt=t("footer",null,"Faktur dibuat di komputer dan berlaku tanpa tanda tangan dan stempel.",-1),Gt=t("div",null,null,-1);function It(i,g,a,Ut,Yt,c){var u;const v=m("Head"),h=m("center");return n(),o(b,null,[r(v,null,{default:_(()=>{var e;return[t("title",null,s((e=i.$page.props.setting.app_name)!=null?e:"Atur Setting Terlebih Dahulu")+" - Detail Transaksi",1)]}),_:1}),t("div",P,[t("div",S,[D,t("div",A,[t("div",B,[t("div",j,[t("div",F,[t("div",H,[t("header",null,[t("div",L,[t("div",N,[a.transaction.transaction_status=="pending"?(n(),o("span",V,C)):d("",!0),a.transaction.transaction_status=="paid"?(n(),o("span",M,R)):d("",!0),a.transaction.transaction_status=="failed"?(n(),o("span",E,q)):d("",!0),a.transaction.transaction_status=="done"?(n(),o("span",G,U)):d("",!0)]),t("div",Y,[t("h2",z,[t("a",J,s((u=i.$page.props.setting.app_name)!=null?u:"Atur Setting Terlebih Dahulu"),1)]),t("div",null,s(i.$page.props.app_addresss_invoice),1),t("div",null,s(i.$page.props.app_whatsapp_invoice),1)])])]),t("main",null,[t("div",Q,[t("div",X,[Z,t("h2",$,s(a.transaction.user.name),1),t("div",tt,[l(s(a.transaction.user.student.address)+", Desa/Kel. "+s(a.transaction.user.student.village.name)+", Kec. "+s(a.transaction.user.student.district.name)+", Kota/Kab. "+s(a.transaction.user.student.city.name)+", Provinsi "+s(a.transaction.user.student.province.name)+" ",1),st,l(" "+s(a.transaction.user.student.phone_number),1)]),t("div",at,s(a.transaction.user.email),1)]),t("div",et,[t("h1",nt,s(a.transaction.code),1),t("div",ot,"Tanggal Faktur : "+s(a.transaction.created_at),1),t("div",it,"Batas Waktu Pembayaran: "+s(a.transaction.maximum_payment_time),1)])]),t("table",null,[ct,t("tbody",null,[t("tr",null,[lt,t("td",dt," Pembelian "+s(a.transaction.exam.title),1),t("td",rt,s(c.formatPrice(a.transaction.total_purchases)),1),t("td",_t,s(c.formatPrice(0)),1),t("td",ht,s(c.formatPrice(a.transaction.total_purchases)),1)])]),t("tfoot",null,[t("tr",null,[ut,mt,t("td",null,s(c.formatPrice(a.transaction.total_purchases)),1)]),bt,t("tr",null,[gt,vt,t("td",null,s(c.formatPrice(a.transaction.total_purchases)),1)])])]),pt,kt,ft,yt,t("div",xt,[(n(!0),o(b,null,y(a.banks,e=>(n(),o("div",wt,[t("div",Tt,[t("div",Pt,[r(h,null,{default:_(()=>[t("img",{src:"/storage/upload_files/banks/"+e.image,style:{width:"125px","margin-top":"20px"}},null,8,St)]),_:2},1024)]),t("div",Dt,[r(h,null,{default:_(()=>[t("h5",At,s(e.bank_name),1),t("p",Bt,s(e.rekening_number),1),t("p",jt,[t("b",null,s(e.rekening_name),1)])]),_:2},1024)])])]))),256))]),Ft,t("div",Ht,[Lt,t("div",Nt,[Vt,t("span",Kt,s(a.transaction.maximum_payment_time),1),Ct,Mt,Ot,Rt,Et])]),Wt]),qt]),Gt])])])])])])],64)}const Xt=w(T,[["render",It]]);export{Xt as default};