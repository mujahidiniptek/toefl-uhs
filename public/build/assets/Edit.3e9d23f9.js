import{L as T}from"./Layout.b71760ab.js";import{L as j,H as S,i as B,r as E,o as r,c as s,a as g,w as U,b as i,j as L,k as w,v as q,n as h,t as b,d as u,F as x,e as R,l as A,m as P,f as V,g as F}from"./app.a6635da7.js";import{S as I}from"./sweetalert2.all.e70935e2.js";import{E as z}from"./Editor.4fd38177.js";import{_ as M}from"./_plugin-vue_export-helper.cdc0426e.js";const N={layout:T,components:{Link:j,Head:S,Editor:z},props:{errors:Object,questionTitle:Object,question:Object,valueCategories:Object},setup(l){const t=B({value_category_id:l.question.value_category_id,audio_input:l.question.audio_input,audio_played_limit:l.question.audio_played_limit,audio_answer_time:l.question.audio_answer_time,question:l.question.question,option_1:l.question.option_1,option_2:l.question.option_2,option_3:l.question.option_3,option_4:l.question.option_4,option_5:l.question.option_5,answer:l.question.answer,type:l.question.type,direction:l.question.direction});return{form:t,submit:()=>{P.Inertia.post(`/admin/question-titles/${l.questionTitle.id}/questions/${l.question.id}`,{forceFormData:!0,_method:"put",question_title_id:l.questionTitle.id,value_category_id:t.value_category_id,audio_input:t.audio_input,audio:t.audio,audio_played:t.audio_played,audio_played_limit:t.audio_played_limit,audio_answer_time:t.audio_answer_time,question:t.question,option_1:t.option_1,option_2:t.option_2,option_3:t.option_3,option_4:t.option_4,option_5:t.option_5,answer:t.answer,type:t.type,direction:t.direction},{onSuccess:()=>{I.fire({title:"Success!",text:"Soal Berhasil Diupdate!.",icon:"success",showConfirmButton:!1,timer:1e3})}})}}}},H={class:"page-wrapper"},O={class:"page-content"},J=V('<div class="page-breadcrumb d-none d-sm-flex align-items-center mb-3"><div class="breadcrumb-title pe-3">Soal</div><div class="ps-3"><nav aria-label="breadcrumb"><ol class="breadcrumb mb-0 p-0"><li class="breadcrumb-item"><a href="javascript:;"><i class="bx bx-home-alt"></i></a></li><li class="breadcrumb-item active" aria-current="page">Tambah Soal</li></ol></nav></div></div>',1),K={class:"card border-top border-0 border-3 border-primary"},W={class:"card-body"},Q={class:"d-lg-flex align-items-center"},Y={class:"ms-auto"},G=F("Kembali"),X={class:"col-12"},Z=i("label",{class:"form-label"},"Tipe",-1),$=i("option",{value:"1"},"Pertanyaan (Question)",-1),ee=i("option",{value:"2"},"Petunjuk (Direction)",-1),ie=[$,ee],te={key:0,class:"invalid-feedback"},ae={key:0,class:"col-12"},oe=i("label",{class:"form-label"},"Kategori Penilaian",-1),le=i("option",{value:""},"[ Pilih ]",-1),ne=["value"],re={key:0,class:"invalid-feedback"},se={class:"col-12"},de=i("label",{class:"form-label"},"Tambah Audio",-1),ce=i("option",{value:""},"[ Pilih ]",-1),ue=i("option",{value:"0"},"Tidak",-1),me=i("option",{value:"1"},"Ya",-1),_e=[ce,ue,me],be={key:0,class:"invalid-feedback"},pe={key:1,class:"col-12"},ve=i("label",{class:"form-label"},"Audio",-1),ge={key:0,class:"invalid-feedback"},fe={key:2,class:"col-12"},ye=i("label",{class:"form-label"},"Batasan Audio Bisa Diputar",-1),he={key:0,class:"invalid-feedback"},ke={key:3,class:"col-12"},we=i("label",{class:"form-label"},[i("b",null,"Direction")],-1),qe={key:0},Ee={key:4,class:"col-12"},Ue=i("label",{class:"form-label"},"Batas Waktu Menjawab (Detik), Input 0 Jika Tidak Ada Batasan",-1),xe={key:0,class:"invalid-feedback"},Ae={key:5,class:"col-12"},Ve=i("label",{class:"form-label"},[i("b",null,"Soal")],-1),Ce={key:0},De=i("hr",null,null,-1),Te={key:6,class:"col-12"},je=i("label",{class:"form-label"},[i("b",null,"Pilihan A")],-1),Se={key:0},Be={key:7,class:"col-12"},Le=i("label",{class:"form-label"},[i("b",null,"Pilihan B")],-1),Re={key:0},Pe={key:8,class:"col-12"},Fe=i("label",{class:"form-label"},[i("b",null,"Pilihan C")],-1),Ie={key:0},ze={key:9,class:"col-12"},Me=i("label",{class:"form-label"},[i("b",null,"Pilihan D")],-1),Ne={key:0},He={key:10,class:"col-12"},Oe=i("label",{class:"form-label"},[i("b",null,"Pilihan E")],-1),Je={key:0},Ke={key:11,class:"col-12"},We=i("label",{class:"form-label"},[i("b",null,"Jawaban")],-1),Qe=V('<option value="">[ Pilih ]</option><option value="1">A</option><option value="2">B</option><option value="3">C</option><option value="4">D</option><option value="5">E</option>',6),Ye=[Qe],Ge={key:0,class:"invalid-feedback"},Xe=i("div",{class:"col-12"},[i("button",{type:"submit",class:"btn btn-primary btn-sm px-5"},"Submit")],-1);function Ze(l,t,a,o,$e,ei){const C=E("Head"),D=E("Link"),y=E("Editor");return r(),s(x,null,[g(C,null,{default:U(()=>{var e;return[i("title",null,b((e=l.$page.props.setting.app_name)!=null?e:"Atur Setting Terlebih Dahulu")+" - Edit Soal",1)]}),_:1}),i("div",H,[i("div",O,[J,i("div",K,[i("div",W,[i("div",Q,[i("div",Y,[g(D,{href:`/admin/question-titles/${a.questionTitle.id}/questions`,class:"btn btn-primary btn-sm mt-2 mt-lg-0"},{default:U(()=>[G]),_:1},8,["href"])])]),i("form",{onSubmit:t[14]||(t[14]=L((...e)=>o.submit&&o.submit(...e),["prevent"])),class:"row g-3"},[i("div",X,[Z,w(i("select",{"onUpdate:modelValue":t[0]||(t[0]=e=>o.form.type=e),class:h([{"is-invalid":a.errors.type},"form-select"])},ie,2),[[q,o.form.type]]),a.errors.type?(r(),s("div",te,b(a.errors.type),1)):u("",!0)]),a.questionTitle.add_value_category==1&&a.questionTitle.assessment_type==1?(r(),s("div",ae,[oe,w(i("select",{"onUpdate:modelValue":t[1]||(t[1]=e=>o.form.value_category_id=e),class:h([{"is-invalid":a.errors.value_category_id},"form-select"])},[le,(r(!0),s(x,null,R(a.valueCategories,(e,f)=>(r(),s("option",{key:f,value:e.id},b(e.name),9,ne))),128))],2),[[q,o.form.value_category_id]]),a.errors.value_category_id?(r(),s("div",re,b(a.errors.value_category_id),1)):u("",!0)])):u("",!0),i("div",se,[de,w(i("select",{"onUpdate:modelValue":t[2]||(t[2]=e=>o.form.audio_input=e),class:h([{"is-invalid":a.errors.audio_input},"form-select"])},_e,2),[[q,o.form.audio_input]]),a.errors.audio_input?(r(),s("div",be,b(a.errors.audio_input),1)):u("",!0)]),o.form.audio_input==1?(r(),s("div",pe,[ve,i("input",{type:"file",class:h(["form-control",{"is-invalid":a.errors.audio}]),onInput:t[3]||(t[3]=e=>o.form.audio=e.target.files[0]),placeholder:"Audio"},null,34),a.errors.audio?(r(),s("div",ge,b(a.errors.audio),1)):u("",!0)])):u("",!0),o.form.audio_input==1?(r(),s("div",fe,[ye,w(i("input",{type:"number",class:h(["form-control",{"is-invalid":a.errors.audio_played_limit}]),"onUpdate:modelValue":t[4]||(t[4]=e=>o.form.audio_played_limit=e),placeholder:"Batasan Audio Bisa Diputar"},null,2),[[A,o.form.audio_played_limit]]),a.errors.audio_played_limit?(r(),s("div",he,b(a.errors.audio_played_limit),1)):u("",!0)])):u("",!0),o.form.type==2?(r(),s("div",ke,[we,g(y,{"api-key":"sy5v0kqs49ugpsv8snsegptqrxysapo4zq1yn9ob0spq2gyx",modelValue:o.form.direction,"onUpdate:modelValue":t[5]||(t[5]=e=>o.form.direction=e),init:{automatic_uploads:!0,height:400,external_plugins:{tiny_mce_wiris:"/assets/plugins/wiris/mathtype-tinymce5/plugin.min.js"},plugins:["advlist autolink lists link image charmap print preview hr anchor pagebreak","searchreplace wordcount visualblocks visualchars code fullscreen","insertdatetime media nonbreaking save table contextmenu directionality","emoticons template paste textcolor colorpicker textpattern imagetools"],draggable_modal:!0,toolbar:"insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | print preview media | forecolor backcolor emoticons | tiny_mce_wiris_formulaEditor tiny_mce_wiris_formulaEditorChemistry",image_advtab:!0,image_title:!0,automatic_uploads:!0,images_upload_url:"/upload",file_picker_types:"image",file_picker_callback:function(e,f,k){var n=l.document.createElement("input");n.setAttribute("type","file"),n.setAttribute("accept","image/*"),n.onchange=function(){var d=this.files[0],c=new l.FileReader;c.readAsDataURL(d),c.onload=function(){var p="blobid"+new Date().getTime(),m=l.tinymce.activeEditor.editorUpload.blobCache,v=c.result.split(",")[1],_=m.create(p,d,v);m.add(_),e(_.blobUri(),{title:d.name})}},n.click()}}},null,8,["modelValue","init"]),a.errors.direction?(r(),s("div",qe,b(a.errors.direction),1)):u("",!0)])):u("",!0),o.form.type==1&&o.form.audio_input==1?(r(),s("div",Ee,[Ue,w(i("input",{type:"number",class:h(["form-control",{"is-invalid":a.errors.audio_answer_time}]),"onUpdate:modelValue":t[6]||(t[6]=e=>o.form.audio_answer_time=e),placeholder:"Batas Waktu Menjawab Sesudah Audio Di Putar"},null,2),[[A,o.form.audio_answer_time]]),a.errors.audio_answer_time?(r(),s("div",xe,b(a.errors.audio_answer_time),1)):u("",!0)])):u("",!0),o.form.type==1?(r(),s("div",Ae,[Ve,g(y,{"api-key":"sy5v0kqs49ugpsv8snsegptqrxysapo4zq1yn9ob0spq2gyx",modelValue:o.form.question,"onUpdate:modelValue":t[7]||(t[7]=e=>o.form.question=e),init:{automatic_uploads:!0,height:400,external_plugins:{tiny_mce_wiris:"/assets/plugins/wiris/mathtype-tinymce5/plugin.min.js"},plugins:["advlist autolink lists link image charmap print preview hr anchor pagebreak","searchreplace wordcount visualblocks visualchars code fullscreen","insertdatetime media nonbreaking save table contextmenu directionality","emoticons template paste textcolor colorpicker textpattern imagetools"],draggable_modal:!0,toolbar:"insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | print preview media | forecolor backcolor emoticons | rtl ltr |tiny_mce_wiris_formulaEditor tiny_mce_wiris_formulaEditorChemistry",image_advtab:!0,image_title:!0,automatic_uploads:!0,images_upload_url:"/upload",file_picker_types:"image",file_picker_callback:function(e,f,k){var n=l.document.createElement("input");n.setAttribute("type","file"),n.setAttribute("accept","image/*"),n.onchange=function(){var d=this.files[0],c=new l.FileReader;c.readAsDataURL(d),c.onload=function(){var p="blobid"+new Date().getTime(),m=l.tinymce.activeEditor.editorUpload.blobCache,v=c.result.split(",")[1],_=m.create(p,d,v);m.add(_),e(_.blobUri(),{title:d.name})}},n.click()}}},null,8,["modelValue","init"]),a.errors.question?(r(),s("div",Ce,b(a.errors.question),1)):u("",!0)])):u("",!0),De,1<=a.questionTitle.total_choices&&o.form.type==1?(r(),s("div",Te,[je,g(y,{"api-key":"sy5v0kqs49ugpsv8snsegptqrxysapo4zq1yn9ob0spq2gyx",modelValue:o.form.option_1,"onUpdate:modelValue":t[8]||(t[8]=e=>o.form.option_1=e),init:{automatic_uploads:!0,height:400,external_plugins:{tiny_mce_wiris:"/assets/plugins/wiris/mathtype-tinymce5/plugin.min.js"},plugins:["advlist autolink lists link image charmap print preview hr anchor pagebreak","searchreplace wordcount visualblocks visualchars code fullscreen","insertdatetime media nonbreaking save table contextmenu directionality","emoticons template paste textcolor colorpicker textpattern imagetools"],toolbar:"insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | print preview media | forecolor backcolor emoticons | rtl ltr | tiny_mce_wiris_formulaEditor tiny_mce_wiris_formulaEditorChemistry",image_advtab:!0,image_title:!0,automatic_uploads:!0,images_upload_url:"/upload",file_picker_types:"image",file_picker_callback:function(e,f,k){var n=l.document.createElement("input");n.setAttribute("type","file"),n.setAttribute("accept","image/*"),n.onchange=function(){var d=this.files[0],c=new l.FileReader;c.readAsDataURL(d),c.onload=function(){var p="blobid"+new Date().getTime(),m=l.tinymce.activeEditor.editorUpload.blobCache,v=c.result.split(",")[1],_=m.create(p,d,v);m.add(_),e(_.blobUri(),{title:d.name})}},n.click()}}},null,8,["modelValue","init"]),a.errors.option_1?(r(),s("div",Se,b(a.errors.option_1),1)):u("",!0)])):u("",!0),2<=a.questionTitle.total_choices&&o.form.type==1?(r(),s("div",Be,[Le,g(y,{"api-key":"sy5v0kqs49ugpsv8snsegptqrxysapo4zq1yn9ob0spq2gyx",modelValue:o.form.option_2,"onUpdate:modelValue":t[9]||(t[9]=e=>o.form.option_2=e),init:{automatic_uploads:!0,height:400,external_plugins:{tiny_mce_wiris:"/assets/plugins/wiris/mathtype-tinymce5/plugin.min.js"},plugins:["advlist autolink lists link image charmap print preview hr anchor pagebreak","searchreplace wordcount visualblocks visualchars code fullscreen","insertdatetime media nonbreaking save table contextmenu directionality","emoticons template paste textcolor colorpicker textpattern imagetools"],toolbar:"insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | print preview media | forecolor backcolor emoticons | rtl ltr | tiny_mce_wiris_formulaEditor tiny_mce_wiris_formulaEditorChemistry",image_advtab:!0,image_title:!0,automatic_uploads:!0,images_upload_url:"/upload",file_picker_types:"image",file_picker_callback:function(e,f,k){var n=l.document.createElement("input");n.setAttribute("type","file"),n.setAttribute("accept","image/*"),n.onchange=function(){var d=this.files[0],c=new l.FileReader;c.readAsDataURL(d),c.onload=function(){var p="blobid"+new Date().getTime(),m=l.tinymce.activeEditor.editorUpload.blobCache,v=c.result.split(",")[1],_=m.create(p,d,v);m.add(_),e(_.blobUri(),{title:d.name})}},n.click()}}},null,8,["modelValue","init"]),a.errors.option_2?(r(),s("div",Re,b(a.errors.option_2),1)):u("",!0)])):u("",!0),3<=a.questionTitle.total_choices&&o.form.type==1?(r(),s("div",Pe,[Fe,g(y,{"api-key":"sy5v0kqs49ugpsv8snsegptqrxysapo4zq1yn9ob0spq2gyx",modelValue:o.form.option_3,"onUpdate:modelValue":t[10]||(t[10]=e=>o.form.option_3=e),init:{automatic_uploads:!0,height:400,external_plugins:{tiny_mce_wiris:"/assets/plugins/wiris/mathtype-tinymce5/plugin.min.js"},plugins:["advlist autolink lists link image charmap print preview hr anchor pagebreak","searchreplace wordcount visualblocks visualchars code fullscreen","insertdatetime media nonbreaking save table contextmenu directionality","emoticons template paste textcolor colorpicker textpattern imagetools"],toolbar:"insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | print preview media | forecolor backcolor emoticons | rtl ltr | tiny_mce_wiris_formulaEditor tiny_mce_wiris_formulaEditorChemistry",image_advtab:!0,image_title:!0,automatic_uploads:!0,images_upload_url:"/upload",file_picker_types:"image",file_picker_callback:function(e,f,k){var n=l.document.createElement("input");n.setAttribute("type","file"),n.setAttribute("accept","image/*"),n.onchange=function(){var d=this.files[0],c=new l.FileReader;c.readAsDataURL(d),c.onload=function(){var p="blobid"+new Date().getTime(),m=l.tinymce.activeEditor.editorUpload.blobCache,v=c.result.split(",")[1],_=m.create(p,d,v);m.add(_),e(_.blobUri(),{title:d.name})}},n.click()}}},null,8,["modelValue","init"]),a.errors.option_3?(r(),s("div",Ie,b(a.errors.option_3),1)):u("",!0)])):u("",!0),4<=a.questionTitle.total_choices&&o.form.type==1?(r(),s("div",ze,[Me,g(y,{"api-key":"sy5v0kqs49ugpsv8snsegptqrxysapo4zq1yn9ob0spq2gyx",modelValue:o.form.option_4,"onUpdate:modelValue":t[11]||(t[11]=e=>o.form.option_4=e),init:{automatic_uploads:!0,height:400,external_plugins:{tiny_mce_wiris:"/assets/plugins/wiris/mathtype-tinymce5/plugin.min.js"},plugins:["advlist autolink lists link image charmap print preview hr anchor pagebreak","searchreplace wordcount visualblocks visualchars code fullscreen","insertdatetime media nonbreaking save table contextmenu directionality","emoticons template paste textcolor colorpicker textpattern imagetools"],toolbar:"insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | print preview media | forecolor backcolor emoticons | rtl ltr | tiny_mce_wiris_formulaEditor tiny_mce_wiris_formulaEditorChemistry",image_advtab:!0,image_title:!0,automatic_uploads:!0,images_upload_url:"/upload",file_picker_types:"image",file_picker_callback:function(e,f,k){var n=l.document.createElement("input");n.setAttribute("type","file"),n.setAttribute("accept","image/*"),n.onchange=function(){var d=this.files[0],c=new l.FileReader;c.readAsDataURL(d),c.onload=function(){var p="blobid"+new Date().getTime(),m=l.tinymce.activeEditor.editorUpload.blobCache,v=c.result.split(",")[1],_=m.create(p,d,v);m.add(_),e(_.blobUri(),{title:d.name})}},n.click()}}},null,8,["modelValue","init"]),a.errors.option_4?(r(),s("div",Ne,b(a.errors.option_4),1)):u("",!0)])):u("",!0),5<=a.questionTitle.total_choices&&o.form.type==1?(r(),s("div",He,[Oe,g(y,{"api-key":"sy5v0kqs49ugpsv8snsegptqrxysapo4zq1yn9ob0spq2gyx",modelValue:o.form.option_5,"onUpdate:modelValue":t[12]||(t[12]=e=>o.form.option_5=e),init:{automatic_uploads:!0,height:400,external_plugins:{tiny_mce_wiris:"/assets/plugins/wiris/mathtype-tinymce5/plugin.min.js"},plugins:["advlist autolink lists link image charmap print preview hr anchor pagebreak","searchreplace wordcount visualblocks visualchars code fullscreen","insertdatetime media nonbreaking save table contextmenu directionality","emoticons template paste textcolor colorpicker textpattern imagetools"],toolbar:"insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | print preview media | forecolor backcolor emoticons | rtl ltr | tiny_mce_wiris_formulaEditor tiny_mce_wiris_formulaEditorChemistry",image_advtab:!0,image_title:!0,automatic_uploads:!0,images_upload_url:"/upload",file_picker_types:"image",file_picker_callback:function(e,f,k){var n=l.document.createElement("input");n.setAttribute("type","file"),n.setAttribute("accept","image/*"),n.onchange=function(){var d=this.files[0],c=new l.FileReader;c.readAsDataURL(d),c.onload=function(){var p="blobid"+new Date().getTime(),m=l.tinymce.activeEditor.editorUpload.blobCache,v=c.result.split(",")[1],_=m.create(p,d,v);m.add(_),e(_.blobUri(),{title:d.name})}},n.click()}}},null,8,["modelValue","init"]),a.errors.option_5?(r(),s("div",Je,b(a.errors.option_5),1)):u("",!0)])):u("",!0),o.form.type==1?(r(),s("div",Ke,[We,w(i("select",{"onUpdate:modelValue":t[13]||(t[13]=e=>o.form.answer=e),class:h([{"is-invalid":a.errors.answer},"form-select"])},Ye,2),[[q,o.form.answer]]),a.errors.answer?(r(),s("div",Ge,b(a.errors.answer),1)):u("",!0)])):u("",!0),Xe],32)])])])])],64)}const ni=M(N,[["render",Ze]]);export{ni as default};
