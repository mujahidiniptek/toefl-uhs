import{L as q}from"./Layout.b71760ab.js";import{L as R,H as L,i as B,r as U,o as r,c as s,a as f,w as A,b as a,j as P,k as w,v as E,n as k,t as p,d as u,F as V,e as S,l as C,m as F,f as T,g as I}from"./app.a6635da7.js";import"./sweetalert2.all.e70935e2.js";import{E as x}from"./Editor.4fd38177.js";import{_ as M}from"./_plugin-vue_export-helper.cdc0426e.js";const N={layout:q,components:{Link:R,Head:L,Editor:x},props:{errors:Object,questionTitle:Object,valueCategories:Object,optionAlphabet:Array},setup(n){const i=B({value_category_id:"",audio_input:"",audio:"",audio_played_limit:"",audio_answer_time:"",question:"",option_1:"",option_2:"",option_3:"",option_4:"",option_5:"",answer:"",discussion:"",type:1,direction:""});return{form:i,submit:()=>{F.Inertia.post(`/admin/question-titles/${n.questionTitle.id}/questions`,{forceFormData:!0,add_value_category:n.questionTitle.add_value_category,question_title_id:n.questionTitle.id,value_category_id:i.value_category_id,audio_input:i.audio_input,audio:i.audio,audio_played_limit:i.audio_played_limit,audio_answer_time:i.audio_answer_time,question:i.question,option_1:i.option_1,option_2:i.option_2,option_3:i.option_3,option_4:i.option_4,option_5:i.option_5,answer:i.answer,discussion:i.discussion,type:i.type,direction:i.direction},{onSuccess:t=>{console.log(t)}})}}}},H={class:"page-wrapper"},O={class:"page-content"},J=T('<div class="page-breadcrumb d-none d-sm-flex align-items-center mb-3"><div class="breadcrumb-title pe-3">Soal</div><div class="ps-3"><nav aria-label="breadcrumb"><ol class="breadcrumb mb-0 p-0"><li class="breadcrumb-item"><a href="javascript:;"><i class="bx bx-home-alt"></i></a></li><li class="breadcrumb-item active" aria-current="page">Tambah Soal</li></ol></nav></div></div>',1),K={class:"card"},W={class:"card-body"},z={class:"d-lg-flex align-items-center"},Q={class:"ms-auto"},Y=I("Kembali"),G={class:"col-12"},X=a("label",{class:"form-label"},"Tipe",-1),Z=a("option",{value:"1"},"Pertanyaan (Question)",-1),$=a("option",{value:"2"},"Petunjuk (Direction)",-1),ee=[Z,$],ie={key:0,class:"invalid-feedback"},te={key:0,class:"col-12"},ae=a("label",{class:"form-label"},"Kategori Penilaian",-1),oe=a("option",{value:""},"[ Pilih ]",-1),le=["value"],ne={key:0,class:"invalid-feedback"},re={key:1,class:"col-12"},se=a("label",{class:"form-label"},[a("b",null,"Direction")],-1),de={key:0},ce={key:2,class:"col-12"},ue=a("label",{class:"form-label"},"Tambah Audio",-1),me=a("option",{value:""},"[ Pilih ]",-1),_e=a("option",{value:"0"},"Tidak",-1),pe=a("option",{value:"1"},"Ya",-1),be=[me,_e,pe],ge={key:0,class:"invalid-feedback"},fe={key:3,class:"col-12"},ve=a("label",{class:"form-label"},"Audio",-1),ye={key:0,class:"invalid-feedback"},he={key:4,class:"col-12"},ke=a("label",{class:"form-label"},"Batasan Audio Bisa Diputar",-1),we={key:0,class:"invalid-feedback"},Ee={key:5,class:"col-12"},Ue=a("label",{class:"form-label"},"Batas Waktu Menjawab (Detik), Input 0 Jika Tidak Ada Batasan",-1),Ae={key:0,class:"invalid-feedback"},Ve={key:6,class:"col-12"},Ce=a("label",{class:"form-label"},[a("b",null,"Soal")],-1),Te={key:0},De=a("hr",null,null,-1),je={key:7,class:"col-12"},qe=a("label",{class:"form-label"},[a("b",null,"Pilihan A")],-1),Re={key:0},Le={key:8,class:"col-12"},Be=a("label",{class:"form-label"},[a("b",null,"Pilihan B")],-1),Pe={key:0},Se={key:9,class:"col-12"},Fe=a("label",{class:"form-label"},[a("b",null,"Pilihan C")],-1),Ie={key:0},xe={key:10,class:"col-12"},Me=a("label",{class:"form-label"},[a("b",null,"Pilihan D")],-1),Ne={key:0},He={key:11,class:"col-12"},Oe=a("label",{class:"form-label"},[a("b",null,"Pilihan E")],-1),Je={key:0},Ke={key:12,class:"col-12"},We=a("label",{class:"form-label"},[a("b",null,"Jawaban")],-1),ze=T('<option value="">[ Pilih ]</option><option value="1">A</option><option value="2">B</option><option value="3">C</option><option value="4">D</option><option value="5">E</option>',6),Qe=[ze],Ye={key:0,class:"invalid-feedback"},Ge={key:13,class:"col-12"},Xe=a("label",{class:"form-label"},[a("b",null,"Pembahasan")],-1),Ze={key:0},$e=a("div",{class:"col-12"},[a("button",{type:"submit",class:"btn btn-primary btn-sm px-5"},"Submit")],-1);function ei(n,i,o,t,ii,ti){const D=U("Head"),j=U("Link"),y=U("Editor");return r(),s(V,null,[f(D,null,{default:A(()=>{var e;return[a("title",null,p((e=n.$page.props.setting.app_name)!=null?e:"Atur Setting Terlebih Dahulu")+" - Tambah Soal",1)]}),_:1}),a("div",H,[a("div",O,[J,a("div",K,[a("div",W,[a("div",z,[a("div",Q,[f(j,{href:`/admin/question-titles/${o.questionTitle.id}/questions`,class:"btn btn-primary btn-sm mt-2 mt-lg-0"},{default:A(()=>[Y]),_:1},8,["href"])])]),a("form",{onSubmit:i[15]||(i[15]=P((...e)=>t.submit&&t.submit(...e),["prevent"])),class:"row g-3"},[a("div",G,[X,w(a("select",{"onUpdate:modelValue":i[0]||(i[0]=e=>t.form.type=e),class:k([{"is-invalid":o.errors.type},"form-select"])},ee,2),[[E,t.form.type]]),o.errors.type?(r(),s("div",ie,p(o.errors.type),1)):u("",!0)]),o.questionTitle.add_value_category==1&&o.questionTitle.assessment_type==1?(r(),s("div",te,[ae,w(a("select",{"onUpdate:modelValue":i[1]||(i[1]=e=>t.form.value_category_id=e),class:k([{"is-invalid":o.errors.value_category_id},"form-select"])},[oe,(r(!0),s(V,null,S(o.valueCategories,(e,v)=>(r(),s("option",{key:v,value:e.id},p(e.name),9,le))),128))],2),[[E,t.form.value_category_id]]),o.errors.value_category_id?(r(),s("div",ne,p(o.errors.value_category_id),1)):u("",!0)])):u("",!0),t.form.type==2?(r(),s("div",re,[se,f(y,{"api-key":n.$page.props.setting.tinymce_api_key,modelValue:t.form.direction,"onUpdate:modelValue":i[2]||(i[2]=e=>t.form.direction=e),init:{automatic_uploads:!0,height:400,external_plugins:{tiny_mce_wiris:"/assets/plugins/wiris/mathtype-tinymce5/plugin.min.js"},plugins:["advlist autolink lists link image charmap print preview hr anchor pagebreak","searchreplace wordcount visualblocks visualchars code fullscreen","insertdatetime media nonbreaking save table contextmenu directionality","emoticons template paste textcolor colorpicker textpattern imagetools"],draggable_modal:!0,toolbar:"insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | print preview media | forecolor backcolor emoticons | tiny_mce_wiris_formulaEditor tiny_mce_wiris_formulaEditorChemistry",image_advtab:!0,image_title:!0,automatic_uploads:!0,images_upload_url:"/upload",file_picker_types:"image",file_picker_callback:function(e,v,h){var l=n.document.createElement("input");l.setAttribute("type","file"),l.setAttribute("accept","image/*"),l.onchange=function(){var d=this.files[0],c=new n.FileReader;c.readAsDataURL(d),c.onload=function(){var b="blobid"+new Date().getTime(),m=n.tinymce.activeEditor.editorUpload.blobCache,g=c.result.split(",")[1],_=m.create(b,d,g);m.add(_),e(_.blobUri(),{title:d.name})}},l.click()}}},null,8,["api-key","modelValue","init"]),o.errors.direction?(r(),s("div",de,p(o.errors.direction),1)):u("",!0)])):u("",!0),t.form.type==1?(r(),s("div",ce,[ue,w(a("select",{"onUpdate:modelValue":i[3]||(i[3]=e=>t.form.audio_input=e),class:k([{"is-invalid":o.errors.audio_input},"form-select"])},be,2),[[E,t.form.audio_input]]),o.errors.audio_input?(r(),s("div",ge,p(o.errors.audio_input),1)):u("",!0)])):u("",!0),t.form.type==1&&t.form.audio_input==1?(r(),s("div",fe,[ve,a("input",{type:"file",class:k(["form-control",{"is-invalid":o.errors.audio}]),onInput:i[4]||(i[4]=e=>t.form.audio=e.target.files[0]),placeholder:"Audio"},null,34),o.errors.audio?(r(),s("div",ye,p(o.errors.audio),1)):u("",!0)])):u("",!0),t.form.type==1&&t.form.audio_input==1?(r(),s("div",he,[ke,w(a("input",{type:"number",class:k(["form-control",{"is-invalid":o.errors.audio_played_limit}]),"onUpdate:modelValue":i[5]||(i[5]=e=>t.form.audio_played_limit=e),placeholder:"Batasan Audio Bisa Diputar"},null,2),[[C,t.form.audio_played_limit]]),o.errors.audio_played_limit?(r(),s("div",we,p(o.errors.audio_played_limit),1)):u("",!0)])):u("",!0),t.form.type==1&&t.form.audio_input==1?(r(),s("div",Ee,[Ue,w(a("input",{type:"number",class:k(["form-control",{"is-invalid":o.errors.audio_answer_time}]),"onUpdate:modelValue":i[6]||(i[6]=e=>t.form.audio_answer_time=e),placeholder:"Batas Waktu Menjawab Sesudah Audio Di Putar"},null,2),[[C,t.form.audio_answer_time]]),o.errors.audio_answer_time?(r(),s("div",Ae,p(o.errors.audio_answer_time),1)):u("",!0)])):u("",!0),t.form.type==1?(r(),s("div",Ve,[Ce,f(y,{"api-key":n.$page.props.setting.tinymce_api_key,modelValue:t.form.question,"onUpdate:modelValue":i[7]||(i[7]=e=>t.form.question=e),init:{automatic_uploads:!0,height:400,external_plugins:{tiny_mce_wiris:"/assets/plugins/wiris/mathtype-tinymce5/plugin.min.js"},plugins:["advlist autolink lists link image charmap print preview hr anchor pagebreak","searchreplace wordcount visualblocks visualchars code fullscreen","insertdatetime media nonbreaking save table contextmenu directionality","emoticons template paste textcolor colorpicker textpattern imagetools"],draggable_modal:!0,toolbar:"insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | print preview media | forecolor backcolor emoticons | tiny_mce_wiris_formulaEditor tiny_mce_wiris_formulaEditorChemistry",image_advtab:!0,image_title:!0,automatic_uploads:!0,images_upload_url:"/upload",file_picker_types:"image",file_picker_callback:function(e,v,h){var l=n.document.createElement("input");l.setAttribute("type","file"),l.setAttribute("accept","image/*"),l.onchange=function(){var d=this.files[0],c=new n.FileReader;c.readAsDataURL(d),c.onload=function(){var b="blobid"+new Date().getTime(),m=n.tinymce.activeEditor.editorUpload.blobCache,g=c.result.split(",")[1],_=m.create(b,d,g);m.add(_),e(_.blobUri(),{title:d.name})}},l.click()}}},null,8,["api-key","modelValue","init"]),o.errors.question?(r(),s("div",Te,p(o.errors.question),1)):u("",!0)])):u("",!0),De,1<=o.questionTitle.total_choices&&t.form.type==1?(r(),s("div",je,[qe,f(y,{"api-key":n.$page.props.setting.tinymce_api_key,modelValue:t.form.option_1,"onUpdate:modelValue":i[8]||(i[8]=e=>t.form.option_1=e),init:{automatic_uploads:!0,height:400,external_plugins:{tiny_mce_wiris:"/assets/plugins/wiris/mathtype-tinymce5/plugin.min.js"},plugins:["advlist autolink lists link image charmap print preview hr anchor pagebreak","searchreplace wordcount visualblocks visualchars code fullscreen","insertdatetime media nonbreaking save table contextmenu directionality","emoticons template paste textcolor colorpicker textpattern imagetools"],toolbar:"insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | print preview media | forecolor backcolor emoticons | tiny_mce_wiris_formulaEditor tiny_mce_wiris_formulaEditorChemistry",image_advtab:!0,image_title:!0,automatic_uploads:!0,images_upload_url:"/upload",file_picker_types:"image",file_picker_callback:function(e,v,h){var l=n.document.createElement("input");l.setAttribute("type","file"),l.setAttribute("accept","image/*"),l.onchange=function(){var d=this.files[0],c=new n.FileReader;c.readAsDataURL(d),c.onload=function(){var b="blobid"+new Date().getTime(),m=n.tinymce.activeEditor.editorUpload.blobCache,g=c.result.split(",")[1],_=m.create(b,d,g);m.add(_),e(_.blobUri(),{title:d.name})}},l.click()}}},null,8,["api-key","modelValue","init"]),o.errors.option_1?(r(),s("div",Re,p(o.errors.option_1),1)):u("",!0)])):u("",!0),2<=o.questionTitle.total_choices&&t.form.type==1?(r(),s("div",Le,[Be,f(y,{"api-key":n.$page.props.setting.tinymce_api_key,modelValue:t.form.option_2,"onUpdate:modelValue":i[9]||(i[9]=e=>t.form.option_2=e),init:{automatic_uploads:!0,height:400,external_plugins:{tiny_mce_wiris:"/assets/plugins/wiris/mathtype-tinymce5/plugin.min.js"},plugins:["advlist autolink lists link image charmap print preview hr anchor pagebreak","searchreplace wordcount visualblocks visualchars code fullscreen","insertdatetime media nonbreaking save table contextmenu directionality","emoticons template paste textcolor colorpicker textpattern imagetools"],toolbar:"insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | print preview media | forecolor backcolor emoticons | tiny_mce_wiris_formulaEditor tiny_mce_wiris_formulaEditorChemistry",image_advtab:!0,image_title:!0,automatic_uploads:!0,images_upload_url:"/upload",file_picker_types:"image",file_picker_callback:function(e,v,h){var l=n.document.createElement("input");l.setAttribute("type","file"),l.setAttribute("accept","image/*"),l.onchange=function(){var d=this.files[0],c=new n.FileReader;c.readAsDataURL(d),c.onload=function(){var b="blobid"+new Date().getTime(),m=n.tinymce.activeEditor.editorUpload.blobCache,g=c.result.split(",")[1],_=m.create(b,d,g);m.add(_),e(_.blobUri(),{title:d.name})}},l.click()}}},null,8,["api-key","modelValue","init"]),o.errors.option_2?(r(),s("div",Pe,p(o.errors.option_2),1)):u("",!0)])):u("",!0),3<=o.questionTitle.total_choices&&t.form.type==1?(r(),s("div",Se,[Fe,f(y,{"api-key":n.$page.props.setting.tinymce_api_key,modelValue:t.form.option_3,"onUpdate:modelValue":i[10]||(i[10]=e=>t.form.option_3=e),init:{automatic_uploads:!0,height:400,external_plugins:{tiny_mce_wiris:"/assets/plugins/wiris/mathtype-tinymce5/plugin.min.js"},plugins:["advlist autolink lists link image charmap print preview hr anchor pagebreak","searchreplace wordcount visualblocks visualchars code fullscreen","insertdatetime media nonbreaking save table contextmenu directionality","emoticons template paste textcolor colorpicker textpattern imagetools"],toolbar:"insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | print preview media | forecolor backcolor emoticons | tiny_mce_wiris_formulaEditor tiny_mce_wiris_formulaEditorChemistry",image_advtab:!0,image_title:!0,automatic_uploads:!0,images_upload_url:"/upload",file_picker_types:"image",file_picker_callback:function(e,v,h){var l=n.document.createElement("input");l.setAttribute("type","file"),l.setAttribute("accept","image/*"),l.onchange=function(){var d=this.files[0],c=new n.FileReader;c.readAsDataURL(d),c.onload=function(){var b="blobid"+new Date().getTime(),m=n.tinymce.activeEditor.editorUpload.blobCache,g=c.result.split(",")[1],_=m.create(b,d,g);m.add(_),e(_.blobUri(),{title:d.name})}},l.click()}}},null,8,["api-key","modelValue","init"]),o.errors.option_3?(r(),s("div",Ie,p(o.errors.option_3),1)):u("",!0)])):u("",!0),4<=o.questionTitle.total_choices&&t.form.type==1?(r(),s("div",xe,[Me,f(y,{"api-key":n.$page.props.setting.tinymce_api_key,modelValue:t.form.option_4,"onUpdate:modelValue":i[11]||(i[11]=e=>t.form.option_4=e),init:{automatic_uploads:!0,height:400,external_plugins:{tiny_mce_wiris:"/assets/plugins/wiris/mathtype-tinymce5/plugin.min.js"},plugins:["advlist autolink lists link image charmap print preview hr anchor pagebreak","searchreplace wordcount visualblocks visualchars code fullscreen","insertdatetime media nonbreaking save table contextmenu directionality","emoticons template paste textcolor colorpicker textpattern imagetools"],toolbar:"insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | print preview media | forecolor backcolor emoticons | tiny_mce_wiris_formulaEditor tiny_mce_wiris_formulaEditorChemistry",image_advtab:!0,image_title:!0,automatic_uploads:!0,images_upload_url:"/upload",file_picker_types:"image",file_picker_callback:function(e,v,h){var l=n.document.createElement("input");l.setAttribute("type","file"),l.setAttribute("accept","image/*"),l.onchange=function(){var d=this.files[0],c=new n.FileReader;c.readAsDataURL(d),c.onload=function(){var b="blobid"+new Date().getTime(),m=n.tinymce.activeEditor.editorUpload.blobCache,g=c.result.split(",")[1],_=m.create(b,d,g);m.add(_),e(_.blobUri(),{title:d.name})}},l.click()}}},null,8,["api-key","modelValue","init"]),o.errors.option_4?(r(),s("div",Ne,p(o.errors.option_4),1)):u("",!0)])):u("",!0),5<=o.questionTitle.total_choices&&t.form.type==1?(r(),s("div",He,[Oe,f(y,{"api-key":n.$page.props.setting.tinymce_api_key,modelValue:t.form.option_5,"onUpdate:modelValue":i[12]||(i[12]=e=>t.form.option_5=e),init:{automatic_uploads:!0,height:400,external_plugins:{tiny_mce_wiris:"/assets/plugins/wiris/mathtype-tinymce5/plugin.min.js"},plugins:["advlist autolink lists link image charmap print preview hr anchor pagebreak","searchreplace wordcount visualblocks visualchars code fullscreen","insertdatetime media nonbreaking save table contextmenu directionality","emoticons template paste textcolor colorpicker textpattern imagetools"],toolbar:"insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | print preview media | forecolor backcolor emoticons | tiny_mce_wiris_formulaEditor tiny_mce_wiris_formulaEditorChemistry",image_advtab:!0,image_title:!0,automatic_uploads:!0,images_upload_url:"/upload",file_picker_types:"image",file_picker_callback:function(e,v,h){var l=n.document.createElement("input");l.setAttribute("type","file"),l.setAttribute("accept","image/*"),l.onchange=function(){var d=this.files[0],c=new n.FileReader;c.readAsDataURL(d),c.onload=function(){var b="blobid"+new Date().getTime(),m=n.tinymce.activeEditor.editorUpload.blobCache,g=c.result.split(",")[1],_=m.create(b,d,g);m.add(_),e(_.blobUri(),{title:d.name})}},l.click()}}},null,8,["api-key","modelValue","init"]),o.errors.option_5?(r(),s("div",Je,p(o.errors.option_5),1)):u("",!0)])):u("",!0),t.form.type==1?(r(),s("div",Ke,[We,w(a("select",{"onUpdate:modelValue":i[13]||(i[13]=e=>t.form.answer=e),class:k([{"is-invalid":o.errors.answer},"form-select"])},Qe,2),[[E,t.form.answer]]),o.errors.answer?(r(),s("div",Ye,p(o.errors.answer),1)):u("",!0)])):u("",!0),t.form.type==1?(r(),s("div",Ge,[Xe,f(y,{"api-key":n.$page.props.setting.tinymce_api_key,modelValue:t.form.discussion,"onUpdate:modelValue":i[14]||(i[14]=e=>t.form.discussion=e),init:{automatic_uploads:!0,height:400,external_plugins:{tiny_mce_wiris:"/assets/plugins/wiris/mathtype-tinymce5/plugin.min.js"},plugins:["advlist autolink lists link image charmap print preview hr anchor pagebreak","searchreplace wordcount visualblocks visualchars code fullscreen","insertdatetime media nonbreaking save table contextmenu directionality","emoticons template paste textcolor colorpicker textpattern imagetools"],draggable_modal:!0,toolbar:"insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | print preview media | forecolor backcolor emoticons | tiny_mce_wiris_formulaEditor tiny_mce_wiris_formulaEditorChemistry",image_advtab:!0,image_title:!0,automatic_uploads:!0,images_upload_url:"/upload",file_picker_types:"image",file_picker_callback:function(e,v,h){var l=n.document.createElement("input");l.setAttribute("type","file"),l.setAttribute("accept","image/*"),l.onchange=function(){var d=this.files[0],c=new n.FileReader;c.readAsDataURL(d),c.onload=function(){var b="blobid"+new Date().getTime(),m=n.tinymce.activeEditor.editorUpload.blobCache,g=c.result.split(",")[1],_=m.create(b,d,g);m.add(_),e(_.blobUri(),{title:d.name})}},l.click()}}},null,8,["api-key","modelValue","init"]),o.errors.discussion?(r(),s("div",Ze,p(o.errors.discussion),1)):u("",!0)])):u("",!0),$e],32)])])])])],64)}const si=M(N,[["render",ei]]);export{si as default};
