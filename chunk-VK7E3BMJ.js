import{a as n}from"./chunk-466QLOUU.js";import"./chunk-QGRRAFG4.js";import"./chunk-27TUAC4L.js";import"./chunk-OF37BXWN.js";import"./chunk-NX5CSR4Y.js";import"./chunk-FZCMU5MS.js";import"./chunk-S2W5FRAG.js";import{a as e}from"./chunk-DAGGDANT.js";import"./chunk-7RI4N67A.js";import"./chunk-NPC5S7L4.js";import"./chunk-TMC7WMLO.js";var t=Object.freeze({displayName:"ERB",fileTypes:["erb","rhtml","html.erb"],injections:{"text.html.erb - (meta.embedded.block.erb | meta.embedded.line.erb | comment)":{patterns:[{begin:"(^\\s*)(?=<%+#(?![^%]*%>))",beginCaptures:{0:{name:"punctuation.whitespace.comment.leading.erb"}},end:"(?!\\G)(\\s*$\\n)?",endCaptures:{0:{name:"punctuation.whitespace.comment.trailing.erb"}},patterns:[{include:"#comment"}]},{begin:"(^\\s*)(?=<%(?![^%]*%>))",beginCaptures:{0:{name:"punctuation.whitespace.embedded.leading.erb"}},end:"(?!\\G)(\\s*$\\n)?",endCaptures:{0:{name:"punctuation.whitespace.embedded.trailing.erb"}},patterns:[{include:"#tags"}]},{include:"#comment"},{include:"#tags"}]}},name:"erb",patterns:[{include:"text.html.basic"}],repository:{comment:{patterns:[{begin:"<%+#",beginCaptures:{0:{name:"punctuation.definition.comment.begin.erb"}},end:"%>",endCaptures:{0:{name:"punctuation.definition.comment.end.erb"}},name:"comment.block.erb"}]},tags:{patterns:[{begin:"<%+(?!>)[-=]?(?![^%]*%>)",beginCaptures:{0:{name:"punctuation.section.embedded.begin.erb"}},contentName:"source.ruby",end:"(-?%)>",endCaptures:{0:{name:"punctuation.section.embedded.end.erb"},1:{name:"source.ruby"}},name:"meta.embedded.block.erb",patterns:[{captures:{1:{name:"punctuation.definition.comment.erb"}},match:"(#).*?(?=-?%>)",name:"comment.line.number-sign.erb"},{include:"source.ruby"}]},{begin:"<%+(?!>)[-=]?",beginCaptures:{0:{name:"punctuation.section.embedded.begin.erb"}},contentName:"source.ruby",end:"(-?%)>",endCaptures:{0:{name:"punctuation.section.embedded.end.erb"},1:{name:"source.ruby"}},name:"meta.embedded.line.erb",patterns:[{captures:{1:{name:"punctuation.definition.comment.erb"}},match:"(#).*?(?=-?%>)",name:"comment.line.number-sign.erb"},{include:"source.ruby"}]}]}},scopeName:"text.html.erb",embeddedLangs:["html","ruby"]}),a=[...e,...n,t];export{a as default};
