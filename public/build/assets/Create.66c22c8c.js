import{L as T}from"./Layout.b71760ab.js";import{L as j,H as B,i as L,r as E,o as r,c as n,a as g,w as U,b as e,j as R,k as w,v as q,n as h,t as p,d as u,F as A,e as S,l as x,m as P,f as V,g as F}from"./app.a6635da7.js";import{S as I}from"./sweetalert2.all.e70935e2.js";import{E as z}from"./Editor.4fd38177.js";import{_ as M}from"./_plugin-vue_export-helper.cdc0426e.js";const N={layout:T,components:{Link:j,Head:B,Editor:z},props:{errors:Object,questionTitle:Object,valueCategories:Object,optionAlphabet:Array},setup(c){const i=L({value_category_id:"",audio_input:"",audio:"",audio_played_limit:"",audio_answer_time:"",question:"",option_1:"",option_2:"",option_3:"",option_4:"",option_5:"",answer:"",type:1,direction:""});return{form:i,submit:()=>{P.Inertia.post(`/admin/question-titles/${c.questionTitle.id}/questions`,{forceFormData:!0,add_value_category:c.questionTitle.add_value_category,question_title_id:c.questionTitle.id,value_category_id:i.value_category_id,audio_input:i.audio_input,audio:i.audio,audio_played_limit:i.audio_played_limit,audio_answer_time:i.audio_answer_time,question:i.question,option_1:i.option_1,option_2:i.option_2,option_3:i.option_3,option_4:i.option_4,option_5:i.option_5,answer:i.answer,type:i.type,direction:i.direction},{onSuccess:o=>{console.log(o),I.fire({title:"Success!",text:"Data Berhasil Disimpan!.",icon:"success",showConfirmButton:!1,timer:1e3})}})}}}},H={class:"page-wrapper"},O={class:"page-content"},J=V('<div class="page-breadcrumb d-none d-sm-flex align-items-center mb-3"><div class="breadcrumb-title pe-3">Soal</div><div class="ps-3"><nav aria-label="breadcrumb"><ol class="breadcrumb mb-0 p-0"><li class="breadcrumb-item"><a href="javascript:;"><i class="bx bx-home-alt"></i></a></li><li class="breadcrumb-item active" aria-current="page">Tambah Soal</li></ol></nav></div></div>',1),K={class:"card border-top border-0 border-3 border-primary"},W={class:"card-body"},Q={class:"d-lg-flex align-items-center"},Y={class:"ms-auto"},G=F("Kembali"),X={class:"col-12"},Z=e("label",{class:"form-label"},"Tipe",-1),$=e("option",{value:"1"},"Pertanyaan (Question)",-1),ee=e("option",{value:"2"},"Petunjuk (Direction)",-1),ie=[$,ee],te={key:0,class:"invalid-feedback"},ae={key:0,class:"col-12"},oe=e("label",{class:"form-label"},"Kategori Penilaian",-1),le=e("option",{value:""},"[ Pilih ]",-1),re=["value"],ne={key:0,class:"invalid-feedback"},se={class:"col-12"},de=e("label",{class:"form-label"},"Tambah Audio",-1),ce=e("option",{value:""},"[ Pilih ]",-1),ue=e("option",{value:"0"},"Tidak",-1),me=e("option",{value:"1"},"Ya",-1),_e=[ce,ue,me],pe={key:0,class:"invalid-feedback"},be={key:1,class:"col-12"},ve=e("label",{class:"form-label"},"Audio",-1),ge={key:0,class:"invalid-feedback"},fe={key:2,class:"col-12"},ye=e("label",{class:"form-label"},"Batasan Audio Bisa Diputar",-1),he={key:0,class:"invalid-feedback"},ke={key:3,class:"col-12"},we=e("label",{class:"form-label"},[e("b",null,"Direction")],-1),qe={key:0},Ee={key:4,class:"col-12"},Ue=e("label",{class:"form-label"},"Batas Waktu Menjawab (Detik), Input 0 Jika Tidak Ada Batasan",-1),Ae={key:0,class:"invalid-feedback"},xe={key:5,class:"col-12"},Ve=e("label",{class:"form-label"},[e("b",null,"Soal")],-1),Ce={key:0},De=e("hr",null,null,-1),Te={key:6,class:"col-12"},je=e("label",{class:"form-label"},[e("b",null,"Pilihan A")],-1),Be={key:0},Le={key:7,class:"col-12"},Re=e("label",{class:"form-label"},[e("b",null,"Pilihan B")],-1),Se={key:0},Pe={key:8,class:"col-12"},Fe=e("label",{class:"form-label"},[e("b",null,"Pilihan C")],-1),Ie={key:0},ze={key:9,class:"col-12"},Me=e("label",{class:"form-label"},[e("b",null,"Pilihan D")],-1),Ne={key:0},He={key:10,class:"col-12"},Oe=e("label",{class:"form-label"},[e("b",null,"Pilihan E")],-1),Je={key:0},Ke={key:11,class:"col-12"},We=e("label",{class:"form-label"},[e("b",null,"Jawaban")],-1),Qe=V('<option value="">[ Pilih ]</option><option value="1">A</option><option value="2">B</option><option value="3">C</option><option value="4">D</option><option value="5">E</option>',6),Ye=[Qe],Ge={key:0,class:"invalid-feedback"},Xe=e("div",{class:"col-12"},[e("button",{type:"submit",class:"btn btn-primary btn-sm px-5"},"Submit")],-1);function Ze(c,i,a,o,$e,ei){const C=E("Head"),D=E("Link"),y=E("Editor");return r(),n(A,null,[g(C,null,{default:U(()=>[e("title",null,p(c.$page.props.app_name)+" - Tambah Soal",1)]),_:1}),e("div",H,[e("div",O,[J,e("div",K,[e("div",W,[e("div",Q,[e("div",Y,[g(D,{href:`/admin/question-titles/${a.questionTitle.id}/questions`,class:"btn btn-primary btn-sm mt-2 mt-lg-0"},{default:U(()=>[G]),_:1},8,["href"])])]),e("form",{onSubmit:i[14]||(i[14]=R((...t)=>o.submit&&o.submit(...t),["prevent"])),class:"row g-3"},[e("div",X,[Z,w(e("select",{"onUpdate:modelValue":i[0]||(i[0]=t=>o.form.type=t),class:h([{"is-invalid":a.errors.type},"form-select"])},ie,2),[[q,o.form.type]]),a.errors.type?(r(),n("div",te,p(a.errors.type),1)):u("",!0)]),a.questionTitle.add_value_category==1&&a.questionTitle.assessment_type==1?(r(),n("div",ae,[oe,w(e("select",{"onUpdate:modelValue":i[1]||(i[1]=t=>o.form.value_category_id=t),class:h([{"is-invalid":a.errors.value_category_id},"form-select"])},[le,(r(!0),n(A,null,S(a.valueCategories,(t,f)=>(r(),n("option",{key:f,value:t.id},p(t.name),9,re))),128))],2),[[q,o.form.value_category_id]]),a.errors.value_category_id?(r(),n("div",ne,p(a.errors.value_category_id),1)):u("",!0)])):u("",!0),e("div",se,[de,w(e("select",{"onUpdate:modelValue":i[2]||(i[2]=t=>o.form.audio_input=t),class:h([{"is-invalid":a.errors.audio_input},"form-select"])},_e,2),[[q,o.form.audio_input]]),a.errors.audio_input?(r(),n("div",pe,p(a.errors.audio_input),1)):u("",!0)]),o.form.audio_input==1?(r(),n("div",be,[ve,e("input",{type:"file",class:h(["form-control",{"is-invalid":a.errors.audio}]),onInput:i[3]||(i[3]=t=>o.form.audio=t.target.files[0]),placeholder:"Audio"},null,34),a.errors.audio?(r(),n("div",ge,p(a.errors.audio),1)):u("",!0)])):u("",!0),o.form.audio_input==1?(r(),n("div",fe,[ye,w(e("input",{type:"number",class:h(["form-control",{"is-invalid":a.errors.audio_played_limit}]),"onUpdate:modelValue":i[4]||(i[4]=t=>o.form.audio_played_limit=t),placeholder:"Batasan Audio Bisa Diputar"},null,2),[[x,o.form.audio_played_limit]]),a.errors.audio_played_limit?(r(),n("div",he,p(a.errors.audio_played_limit),1)):u("",!0)])):u("",!0),o.form.type==2?(r(),n("div",ke,[we,g(y,{"api-key":"sy5v0kqs49ugpsv8snsegptqrxysapo4zq1yn9ob0spq2gyx",modelValue:o.form.direction,"onUpdate:modelValue":i[5]||(i[5]=t=>o.form.direction=t),init:{automatic_uploads:!0,height:400,external_plugins:{tiny_mce_wiris:"/assets/plugins/wiris/mathtype-tinymce5/plugin.min.js"},plugins:["advlist autolink lists link image charmap print preview hr anchor pagebreak","searchreplace wordcount visualblocks visualchars code fullscreen","insertdatetime media nonbreaking save table contextmenu directionality","emoticons template paste textcolor colorpicker textpattern imagetools"],draggable_modal:!0,toolbar:"insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | print preview media | forecolor backcolor emoticons | tiny_mce_wiris_formulaEditor tiny_mce_wiris_formulaEditorChemistry",image_advtab:!0,image_title:!0,automatic_uploads:!0,images_upload_url:"/upload",file_picker_types:"image",file_picker_callback:function(t,f,k){var l=c.document.createElement("input");l.setAttribute("type","file"),l.setAttribute("accept","image/*"),l.onchange=function(){var s=this.files[0],d=new c.FileReader;d.readAsDataURL(s),d.onload=function(){var b="blobid"+new Date().getTime(),m=c.tinymce.activeEditor.editorUpload.blobCache,v=d.result.split(",")[1],_=m.create(b,s,v);m.add(_),t(_.blobUri(),{title:s.name})}},l.click()}}},null,8,["modelValue","init"]),a.errors.direction?(r(),n("div",qe,p(a.errors.direction),1)):u("",!0)])):u("",!0),o.form.type==1&&o.form.audio_input==1?(r(),n("div",Ee,[Ue,w(e("input",{type:"number",class:h(["form-control",{"is-invalid":a.errors.audio_answer_time}]),"onUpdate:modelValue":i[6]||(i[6]=t=>o.form.audio_answer_time=t),placeholder:"Batas Waktu Menjawab Sesudah Audio Di Putar"},null,2),[[x,o.form.audio_answer_time]]),a.errors.audio_answer_time?(r(),n("div",Ae,p(a.errors.audio_answer_time),1)):u("",!0)])):u("",!0),o.form.type==1?(r(),n("div",xe,[Ve,g(y,{"api-key":"sy5v0kqs49ugpsv8snsegptqrxysapo4zq1yn9ob0spq2gyx",modelValue:o.form.question,"onUpdate:modelValue":i[7]||(i[7]=t=>o.form.question=t),init:{automatic_uploads:!0,height:400,external_plugins:{tiny_mce_wiris:"/assets/plugins/wiris/mathtype-tinymce5/plugin.min.js"},plugins:["advlist autolink lists link image charmap print preview hr anchor pagebreak","searchreplace wordcount visualblocks visualchars code fullscreen","insertdatetime media nonbreaking save table contextmenu directionality","emoticons template paste textcolor colorpicker textpattern imagetools"],draggable_modal:!0,toolbar:"insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | print preview media | forecolor backcolor emoticons | rtl ltr |tiny_mce_wiris_formulaEditor tiny_mce_wiris_formulaEditorChemistry",image_advtab:!0,image_title:!0,automatic_uploads:!0,images_upload_url:"/upload",file_picker_types:"image",file_picker_callback:function(t,f,k){var l=c.document.createElement("input");l.setAttribute("type","file"),l.setAttribute("accept","image/*"),l.onchange=function(){var s=this.files[0],d=new c.FileReader;d.readAsDataURL(s),d.onload=function(){var b="blobid"+new Date().getTime(),m=c.tinymce.activeEditor.editorUpload.blobCache,v=d.result.split(",")[1],_=m.create(b,s,v);m.add(_),t(_.blobUri(),{title:s.name})}},l.click()}}},null,8,["modelValue","init"]),a.errors.question?(r(),n("div",Ce,p(a.errors.question),1)):u("",!0)])):u("",!0),De,1<=a.questionTitle.total_choices&&o.form.type==1?(r(),n("div",Te,[je,g(y,{"api-key":"sy5v0kqs49ugpsv8snsegptqrxysapo4zq1yn9ob0spq2gyx",modelValue:o.form.option_1,"onUpdate:modelValue":i[8]||(i[8]=t=>o.form.option_1=t),init:{automatic_uploads:!0,height:400,external_plugins:{tiny_mce_wiris:"/assets/plugins/wiris/mathtype-tinymce5/plugin.min.js"},plugins:["advlist autolink lists link image charmap print preview hr anchor pagebreak","searchreplace wordcount visualblocks visualchars code fullscreen","insertdatetime media nonbreaking save table contextmenu directionality","emoticons template paste textcolor colorpicker textpattern imagetools"],toolbar:"insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | print preview media | forecolor backcolor emoticons | rtl ltr | tiny_mce_wiris_formulaEditor tiny_mce_wiris_formulaEditorChemistry",image_advtab:!0,image_title:!0,automatic_uploads:!0,images_upload_url:"/upload",file_picker_types:"image",file_picker_callback:function(t,f,k){var l=c.document.createElement("input");l.setAttribute("type","file"),l.setAttribute("accept","image/*"),l.onchange=function(){var s=this.files[0],d=new c.FileReader;d.readAsDataURL(s),d.onload=function(){var b="blobid"+new Date().getTime(),m=c.tinymce.activeEditor.editorUpload.blobCache,v=d.result.split(",")[1],_=m.create(b,s,v);m.add(_),t(_.blobUri(),{title:s.name})}},l.click()}}},null,8,["modelValue","init"]),a.errors.option_1?(r(),n("div",Be,p(a.errors.option_1),1)):u("",!0)])):u("",!0),2<=a.questionTitle.total_choices&&o.form.type==1?(r(),n("div",Le,[Re,g(y,{"api-key":"sy5v0kqs49ugpsv8snsegptqrxysapo4zq1yn9ob0spq2gyx",modelValue:o.form.option_2,"onUpdate:modelValue":i[9]||(i[9]=t=>o.form.option_2=t),init:{automatic_uploads:!0,height:400,external_plugins:{tiny_mce_wiris:"/assets/plugins/wiris/mathtype-tinymce5/plugin.min.js"},plugins:["advlist autolink lists link image charmap print preview hr anchor pagebreak","searchreplace wordcount visualblocks visualchars code fullscreen","insertdatetime media nonbreaking save table contextmenu directionality","emoticons template paste textcolor colorpicker textpattern imagetools"],toolbar:"insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | print preview media | forecolor backcolor emoticons | rtl ltr | tiny_mce_wiris_formulaEditor tiny_mce_wiris_formulaEditorChemistry",image_advtab:!0,image_title:!0,automatic_uploads:!0,images_upload_url:"/upload",file_picker_types:"image",file_picker_callback:function(t,f,k){var l=c.document.createElement("input");l.setAttribute("type","file"),l.setAttribute("accept","image/*"),l.onchange=function(){var s=this.files[0],d=new c.FileReader;d.readAsDataURL(s),d.onload=function(){var b="blobid"+new Date().getTime(),m=c.tinymce.activeEditor.editorUpload.blobCache,v=d.result.split(",")[1],_=m.create(b,s,v);m.add(_),t(_.blobUri(),{title:s.name})}},l.click()}}},null,8,["modelValue","init"]),a.errors.option_2?(r(),n("div",Se,p(a.errors.option_2),1)):u("",!0)])):u("",!0),3<=a.questionTitle.total_choices&&o.form.type==1?(r(),n("div",Pe,[Fe,g(y,{"api-key":"sy5v0kqs49ugpsv8snsegptqrxysapo4zq1yn9ob0spq2gyx",modelValue:o.form.option_3,"onUpdate:modelValue":i[10]||(i[10]=t=>o.form.option_3=t),init:{automatic_uploads:!0,height:400,external_plugins:{tiny_mce_wiris:"/assets/plugins/wiris/mathtype-tinymce5/plugin.min.js"},plugins:["advlist autolink lists link image charmap print preview hr anchor pagebreak","searchreplace wordcount visualblocks visualchars code fullscreen","insertdatetime media nonbreaking save table contextmenu directionality","emoticons template paste textcolor colorpicker textpattern imagetools"],toolbar:"insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | print preview media | forecolor backcolor emoticons | rtl ltr | tiny_mce_wiris_formulaEditor tiny_mce_wiris_formulaEditorChemistry",image_advtab:!0,image_title:!0,automatic_uploads:!0,images_upload_url:"/upload",file_picker_types:"image",file_picker_callback:function(t,f,k){var l=c.document.createElement("input");l.setAttribute("type","file"),l.setAttribute("accept","image/*"),l.onchange=function(){var s=this.files[0],d=new c.FileReader;d.readAsDataURL(s),d.onload=function(){var b="blobid"+new Date().getTime(),m=c.tinymce.activeEditor.editorUpload.blobCache,v=d.result.split(",")[1],_=m.create(b,s,v);m.add(_),t(_.blobUri(),{title:s.name})}},l.click()}}},null,8,["modelValue","init"]),a.errors.option_3?(r(),n("div",Ie,p(a.errors.option_3),1)):u("",!0)])):u("",!0),4<=a.questionTitle.total_choices&&o.form.type==1?(r(),n("div",ze,[Me,g(y,{"api-key":"sy5v0kqs49ugpsv8snsegptqrxysapo4zq1yn9ob0spq2gyx",modelValue:o.form.option_4,"onUpdate:modelValue":i[11]||(i[11]=t=>o.form.option_4=t),init:{automatic_uploads:!0,height:400,external_plugins:{tiny_mce_wiris:"/assets/plugins/wiris/mathtype-tinymce5/plugin.min.js"},plugins:["advlist autolink lists link image charmap print preview hr anchor pagebreak","searchreplace wordcount visualblocks visualchars code fullscreen","insertdatetime media nonbreaking save table contextmenu directionality","emoticons template paste textcolor colorpicker textpattern imagetools"],toolbar:"insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | print preview media | forecolor backcolor emoticons | rtl ltr | tiny_mce_wiris_formulaEditor tiny_mce_wiris_formulaEditorChemistry",image_advtab:!0,image_title:!0,automatic_uploads:!0,images_upload_url:"/upload",file_picker_types:"image",file_picker_callback:function(t,f,k){var l=c.document.createElement("input");l.setAttribute("type","file"),l.setAttribute("accept","image/*"),l.onchange=function(){var s=this.files[0],d=new c.FileReader;d.readAsDataURL(s),d.onload=function(){var b="blobid"+new Date().getTime(),m=c.tinymce.activeEditor.editorUpload.blobCache,v=d.result.split(",")[1],_=m.create(b,s,v);m.add(_),t(_.blobUri(),{title:s.name})}},l.click()}}},null,8,["modelValue","init"]),a.errors.option_4?(r(),n("div",Ne,p(a.errors.option_4),1)):u("",!0)])):u("",!0),5<=a.questionTitle.total_choices&&o.form.type==1?(r(),n("div",He,[Oe,g(y,{"api-key":"sy5v0kqs49ugpsv8snsegptqrxysapo4zq1yn9ob0spq2gyx",modelValue:o.form.option_5,"onUpdate:modelValue":i[12]||(i[12]=t=>o.form.option_5=t),init:{automatic_uploads:!0,height:400,external_plugins:{tiny_mce_wiris:"/assets/plugins/wiris/mathtype-tinymce5/plugin.min.js"},plugins:["advlist autolink lists link image charmap print preview hr anchor pagebreak","searchreplace wordcount visualblocks visualchars code fullscreen","insertdatetime media nonbreaking save table contextmenu directionality","emoticons template paste textcolor colorpicker textpattern imagetools"],toolbar:"insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | print preview media | forecolor backcolor emoticons | rtl ltr | tiny_mce_wiris_formulaEditor tiny_mce_wiris_formulaEditorChemistry",image_advtab:!0,image_title:!0,automatic_uploads:!0,images_upload_url:"/upload",file_picker_types:"image",file_picker_callback:function(t,f,k){var l=c.document.createElement("input");l.setAttribute("type","file"),l.setAttribute("accept","image/*"),l.onchange=function(){var s=this.files[0],d=new c.FileReader;d.readAsDataURL(s),d.onload=function(){var b="blobid"+new Date().getTime(),m=c.tinymce.activeEditor.editorUpload.blobCache,v=d.result.split(",")[1],_=m.create(b,s,v);m.add(_),t(_.blobUri(),{title:s.name})}},l.click()}}},null,8,["modelValue","init"]),a.errors.option_5?(r(),n("div",Je,p(a.errors.option_5),1)):u("",!0)])):u("",!0),o.form.type==1?(r(),n("div",Ke,[We,w(e("select",{"onUpdate:modelValue":i[13]||(i[13]=t=>o.form.answer=t),class:h([{"is-invalid":a.errors.answer},"form-select"])},Ye,2),[[q,o.form.answer]]),a.errors.answer?(r(),n("div",Ge,p(a.errors.answer),1)):u("",!0)])):u("",!0),Xe],32)])])])])],64)}const ri=M(N,[["render",Ze]]);export{ri as default};
