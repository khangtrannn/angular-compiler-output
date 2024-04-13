import{a as t}from"./chunk-FZCMU5MS.js";import"./chunk-S2W5FRAG.js";import{a as u}from"./chunk-UKVGUTLN.js";import{a as n}from"./chunk-DAGGDANT.js";import{a}from"./chunk-7RI4N67A.js";import{a as e}from"./chunk-NPC5S7L4.js";import"./chunk-TMC7WMLO.js";var o=Object.freeze({displayName:"APL",fileTypes:["apl","apla","aplc","aplf","apli","apln","aplo","dyalog","dyapp","mipage"],firstLineMatch:`(?x)
# APL symbols
[\u2336-\u237A]
|

# Hashbang
^\\#!.*(?:\\s|\\/|(?<=!)\\b)
	(?:gnu[-._]?apl|aplx?|dyalog)
(?:$|\\s)
|

# Modeline
(?i:
	# Emacs
	-\\*-(?:\\s*(?=[^:;\\s]+\\s*-\\*-)|(?:.*?[;\\s]|(?<=-\\*-))mode\\s*:\\s*)
		apl
	(?=[\\s;]|(?<![-*])-\\*-).*?-\\*-

	|

	# Vim
	(?:(?:\\s|^)vi(?:m[<=>]?\\d+|m)?|\\sex)(?=:(?=\\s*set?\\s[^\\n:]+:)|:(?!\\s* set?\\s))(?:(?:\\s|\\s*:\\s*)\\w*(?:\\s*=(?:[^\\n\\\\\\s]|\\\\.)*)?)*[\\s:](?:filetype|ft|syntax)\\s*=
		apl
	(?=\\s|:|$)
)`,foldingStartMarker:"{",foldingStopMarker:"}",name:"apl",patterns:[{match:"\\A#!.*$",name:"comment.line.shebang.apl"},{include:"#heredocs"},{include:"#main"},{begin:"^\\s*((\\))OFF|(\\])NEXTFILE)\\b(.*)$",beginCaptures:{1:{name:"entity.name.command.eof.apl"},2:{name:"punctuation.definition.command.apl"},3:{name:"punctuation.definition.command.apl"},4:{patterns:[{include:"#comment"}]}},contentName:"text.embedded.apl",end:"(?=N)A"},{begin:"\\(",beginCaptures:{0:{name:"punctuation.round.bracket.begin.apl"}},end:"\\)",endCaptures:{0:{name:"punctuation.round.bracket.end.apl"}},name:"meta.round.bracketed.group.apl",patterns:[{include:"#main"}]},{begin:"\\[",beginCaptures:{0:{name:"punctuation.square.bracket.begin.apl"}},end:"\\]",endCaptures:{0:{name:"punctuation.square.bracket.end.apl"}},name:"meta.square.bracketed.group.apl",patterns:[{include:"#main"}]},{begin:"^\\s*((\\))\\S+)",beginCaptures:{1:{name:"entity.name.command.apl"},2:{name:"punctuation.definition.command.apl"}},end:"$",name:"meta.system.command.apl",patterns:[{include:"#command-arguments"},{include:"#command-switches"},{include:"#main"}]},{begin:"^\\s*((\\])\\S+)",beginCaptures:{1:{name:"entity.name.command.apl"},2:{name:"punctuation.definition.command.apl"}},end:"$",name:"meta.user.command.apl",patterns:[{include:"#command-arguments"},{include:"#command-switches"},{include:"#main"}]}],repository:{class:{patterns:[{begin:`(?x)
(?<=\\s|^)
((:)Class)
\\s+
(
'[^']*'?
|
[A-Z_a-z\xC0-\xD6\xD8-\xDD\xDF\xE0-\xF6\xF8-\xFC\xFE\u2206\u2359\u24B6-\u24CF]
[A-Z_a-z\xC0-\xD6\xD8-\xDD\xDF\xE0-\xF6\xF8-\xFC\xFE\u2206\u2359\u24B6-\u24CF\xAF0-9]*
)
\\s*
(
(:)
\\s*
(?:
(
'[^']*'?
|
[A-Z_a-z\xC0-\xD6\xD8-\xDD\xDF\xE0-\xF6\xF8-\xFC\xFE\u2206\u2359\u24B6-\u24CF]
[A-Z_a-z\xC0-\xD6\xD8-\xDD\xDF\xE0-\xF6\xF8-\xFC\xFE\u2206\u2359\u24B6-\u24CF\xAF0-9]*
)
\\s*
)?
)?
(.*?)$`,beginCaptures:{0:{name:"meta.class.apl"},1:{name:"keyword.control.class.apl"},2:{name:"punctuation.definition.class.apl"},3:{name:"entity.name.type.class.apl",patterns:[{include:"#strings"}]},4:{name:"entity.other.inherited-class.apl"},5:{name:"punctuation.separator.inheritance.apl"},6:{patterns:[{include:"#strings"}]},7:{name:"entity.other.class.interfaces.apl",patterns:[{include:"#csv"}]}},end:"(?<=\\s|^)((:)EndClass)(?=\\b)",endCaptures:{1:{name:"keyword.control.class.apl"},2:{name:"punctuation.definition.class.apl"}},patterns:[{begin:"(?<=\\s|^)(:)Field(?=\\s)",beginCaptures:{0:{name:"keyword.control.field.apl"},1:{name:"punctuation.definition.field.apl"}},end:"\\s*(\u2190.*)?(?:$|(?=\u235D))",endCaptures:{0:{name:"entity.other.initial-value.apl"},1:{patterns:[{include:"#main"}]}},name:"meta.field.apl",patterns:[{match:"(?<=\\s|^)Public(?=\\s|$)",name:"storage.modifier.access.public.apl"},{match:"(?<=\\s|^)Private(?=\\s|$)",name:"storage.modifier.access.private.apl"},{match:"(?<=\\s|^)Shared(?=\\s|$)",name:"storage.modifier.shared.apl"},{match:"(?<=\\s|^)Instance(?=\\s|$)",name:"storage.modifier.instance.apl"},{match:"(?<=\\s|^)ReadOnly(?=\\s|$)",name:"storage.modifier.readonly.apl"},{captures:{1:{patterns:[{include:"#strings"}]}},match:`(?x)
(
'[^']*'?
|
[A-Z_a-z\xC0-\xD6\xD8-\xDD\xDF\xE0-\xF6\xF8-\xFC\xFE\u2206\u2359\u24B6-\u24CF]
[A-Z_a-z\xC0-\xD6\xD8-\xDD\xDF\xE0-\xF6\xF8-\xFC\xFE\u2206\u2359\u24B6-\u24CF\xAF0-9]*
)`,name:"entity.name.type.apl"}]},{include:"$self"}]}]},"command-arguments":{patterns:[{begin:"\\b(?=\\S)",end:"\\b(?=\\s)",name:"variable.parameter.argument.apl",patterns:[{include:"#main"}]}]},"command-switches":{patterns:[{begin:`(?x)
(?<=\\s)(-)
(
[A-Z_a-z\xC0-\xD6\xD8-\xDD\xDF\xE0-\xF6\xF8-\xFC\xFE\u2206\u2359\u24B6-\u24CF]
[A-Z_a-z\xC0-\xD6\xD8-\xDD\xDF\xE0-\xF6\xF8-\xFC\xFE\u2206\u2359\u24B6-\u24CF\xAF0-9]*
)
(=)`,beginCaptures:{1:{name:"punctuation.delimiter.switch.apl"},2:{name:"entity.name.switch.apl"},3:{name:"punctuation.assignment.switch.apl"}},end:"\\b(?=\\s)",name:"variable.parameter.switch.apl",patterns:[{include:"#main"}]},{captures:{1:{name:"punctuation.delimiter.switch.apl"},2:{name:"entity.name.switch.apl"}},match:`(?x)
(?<=\\s)(-)
(
[A-Z_a-z\xC0-\xD6\xD8-\xDD\xDF\xE0-\xF6\xF8-\xFC\xFE\u2206\u2359\u24B6-\u24CF]
[A-Z_a-z\xC0-\xD6\xD8-\xDD\xDF\xE0-\xF6\xF8-\xFC\xFE\u2206\u2359\u24B6-\u24CF\xAF0-9]*
)
(?!=)`,name:"variable.parameter.switch.apl"}]},comment:{patterns:[{begin:"\u235D",captures:{0:{name:"punctuation.definition.comment.apl"}},end:"$",name:"comment.line.apl"}]},csv:{patterns:[{match:",",name:"punctuation.separator.apl"},{include:"$self"}]},definition:{patterns:[{begin:"(?x) ^\\s*? (?# 1: keyword.operator.nabla.apl) (\u2207) (?: \\s* (?: (?# 2: entity.function.return-value.apl) ( [A-Z_a-z\xC0-\xD6\xD8-\xDD\xDF\xE0-\xF6\xF8-\xFC\xFE\u2206\u2359\u24B6-\u24CF] [A-Z_a-z\xC0-\xD6\xD8-\xDD\xDF\xE0-\xF6\xF8-\xFC\xFE\u2206\u2359\u24B6-\u24CF\xAF0-9]* ) | \\s* (?# 3: entity.function.return-value.shy.apl) ( (\\{)             (?# 4: punctuation.definition.return-value.begin.apl) (?: \\s* [A-Z_a-z\xC0-\xD6\xD8-\xDD\xDF\xE0-\xF6\xF8-\xFC\xFE\u2206\u2359\u24B6-\u24CF] [A-Z_a-z\xC0-\xD6\xD8-\xDD\xDF\xE0-\xF6\xF8-\xFC\xFE\u2206\u2359\u24B6-\u24CF\xAF0-9]* \\s* )* (\\})             (?# 5: punctuation.definition.return-value.end.apl) | (\\()             (?# 6: punctuation.definition.return-value.begin.apl) (?: \\s* [A-Z_a-z\xC0-\xD6\xD8-\xDD\xDF\xE0-\xF6\xF8-\xFC\xFE\u2206\u2359\u24B6-\u24CF] [A-Z_a-z\xC0-\xD6\xD8-\xDD\xDF\xE0-\xF6\xF8-\xFC\xFE\u2206\u2359\u24B6-\u24CF\xAF0-9]* \\s* )* (\\))             (?# 7: punctuation.definition.return-value.end.apl) | (\\(\\s*\\{)      (?# 8: punctuation.definition.return-value.begin.apl) (?: \\s* [A-Z_a-z\xC0-\xD6\xD8-\xDD\xDF\xE0-\xF6\xF8-\xFC\xFE\u2206\u2359\u24B6-\u24CF] [A-Z_a-z\xC0-\xD6\xD8-\xDD\xDF\xE0-\xF6\xF8-\xFC\xFE\u2206\u2359\u24B6-\u24CF\xAF0-9]* \\s* )* (\\}\\s*\\))      (?# 9: punctuation.definition.return-value.end.apl) | (\\{\\s*\\()      (?# 10: punctuation.definition.return-value.begin.apl) (?: \\s* [A-Z_a-z\xC0-\xD6\xD8-\xDD\xDF\xE0-\xF6\xF8-\xFC\xFE\u2206\u2359\u24B6-\u24CF] [A-Z_a-z\xC0-\xD6\xD8-\xDD\xDF\xE0-\xF6\xF8-\xFC\xFE\u2206\u2359\u24B6-\u24CF\xAF0-9]* \\s* )* (\\)\\s*\\})      (?# 11: punctuation.definition.return-value.end.apl) ) \\s* ) \\s* (?# 12: keyword.operator.assignment.apl) (\u2190) )? \\s* (?: (?# MONADIC) (?: (?# 13: entity.function.name.apl) ( [A-Z_a-z\xC0-\xD6\xD8-\xDD\xDF\xE0-\xF6\xF8-\xFC\xFE\u2206\u2359\u24B6-\u24CF] [A-Z_a-z\xC0-\xD6\xD8-\xDD\xDF\xE0-\xF6\xF8-\xFC\xFE\u2206\u2359\u24B6-\u24CF\xAF0-9]* ) \\s* (?# 14: entity.function.axis.apl) ( (?# 15: punctuation.definition.axis.begin.apl) (\\[) \\s* (?: \\s* [A-Z_a-z\xC0-\xD6\xD8-\xDD\xDF\xE0-\xF6\xF8-\xFC\xFE\u2206\u2359\u24B6-\u24CF] [A-Z_a-z\xC0-\xD6\xD8-\xDD\xDF\xE0-\xF6\xF8-\xFC\xFE\u2206\u2359\u24B6-\u24CF\xAF0-9]* \\s* (?# 16: invalid.illegal.extra-characters.apl) (.*?) | (?# 17: invalid.illegal.apl) ([^\\]]*) ) \\s* (?# 18: punctuation.definition.axis.end.apl) (\\]) )? \\s*? (?# 19: entity.function.arguments.right.apl) ( (?<=\\s|\\]) [A-Z_a-z\xC0-\xD6\xD8-\xDD\xDF\xE0-\xF6\xF8-\xFC\xFE\u2206\u2359\u24B6-\u24CF] [A-Z_a-z\xC0-\xD6\xD8-\xDD\xDF\xE0-\xF6\xF8-\xFC\xFE\u2206\u2359\u24B6-\u24CF\xAF0-9]* | (\\()   (?# 20: punctuation.definition.arguments.begin.apl) (?: \\s* [A-Z_a-z\xC0-\xD6\xD8-\xDD\xDF\xE0-\xF6\xF8-\xFC\xFE\u2206\u2359\u24B6-\u24CF] [A-Z_a-z\xC0-\xD6\xD8-\xDD\xDF\xE0-\xF6\xF8-\xFC\xFE\u2206\u2359\u24B6-\u24CF\xAF0-9]* \\s* )* (\\))   (?# 21: punctuation.definition.arguments.end.apl) ) \\s* (?=;|$) ) | (?# DYADIC/AMBIVALENT) (?#==================) (?: (?# 22: entity.function.arguments.left.apl) ( [A-Z_a-z\xC0-\xD6\xD8-\xDD\xDF\xE0-\xF6\xF8-\xFC\xFE\u2206\u2359\u24B6-\u24CF] [A-Z_a-z\xC0-\xD6\xD8-\xDD\xDF\xE0-\xF6\xF8-\xFC\xFE\u2206\u2359\u24B6-\u24CF\xAF0-9]* \\s+ ) | (?# 23: entity.function.arguments.left.optional.apl) ( (\\{)          (?# 24: punctuation.definition.arguments.begin.apl) (?: \\s* [A-Z_a-z\xC0-\xD6\xD8-\xDD\xDF\xE0-\xF6\xF8-\xFC\xFE\u2206\u2359\u24B6-\u24CF] [A-Z_a-z\xC0-\xD6\xD8-\xDD\xDF\xE0-\xF6\xF8-\xFC\xFE\u2206\u2359\u24B6-\u24CF\xAF0-9]* \\s* )* (\\})          (?# 25: punctuation.definition.arguments.end.apl) | (\\(\\s*\\{)   (?# 26: punctuation.definition.arguments.begin.apl) (?: \\s* [A-Z_a-z\xC0-\xD6\xD8-\xDD\xDF\xE0-\xF6\xF8-\xFC\xFE\u2206\u2359\u24B6-\u24CF] [A-Z_a-z\xC0-\xD6\xD8-\xDD\xDF\xE0-\xF6\xF8-\xFC\xFE\u2206\u2359\u24B6-\u24CF\xAF0-9]* \\s* )* (\\}\\s*\\))   (?# 27: punctuation.definition.arguments.end.apl) | (\\{\\s*\\()   (?# 28: punctuation.definition.arguments.begin.apl) (?: \\s* [A-Z_a-z\xC0-\xD6\xD8-\xDD\xDF\xE0-\xF6\xF8-\xFC\xFE\u2206\u2359\u24B6-\u24CF] [A-Z_a-z\xC0-\xD6\xD8-\xDD\xDF\xE0-\xF6\xF8-\xFC\xFE\u2206\u2359\u24B6-\u24CF\xAF0-9]* \\s* )* (\\)\\s*\\})   (?# 29: punctuation.definition.arguments.end.apl) ) )? \\s* (?: (?# 30: entity.function.name.apl) ( [A-Z_a-z\xC0-\xD6\xD8-\xDD\xDF\xE0-\xF6\xF8-\xFC\xFE\u2206\u2359\u24B6-\u24CF] [A-Z_a-z\xC0-\xD6\xD8-\xDD\xDF\xE0-\xF6\xF8-\xFC\xFE\u2206\u2359\u24B6-\u24CF\xAF0-9]* ) \\s* (?# 31: entity.function.axis.apl) ( (?# 32: punctuation.definition.axis.begin.apl) (\\[) \\s* (?: \\s* [A-Z_a-z\xC0-\xD6\xD8-\xDD\xDF\xE0-\xF6\xF8-\xFC\xFE\u2206\u2359\u24B6-\u24CF] [A-Z_a-z\xC0-\xD6\xD8-\xDD\xDF\xE0-\xF6\xF8-\xFC\xFE\u2206\u2359\u24B6-\u24CF\xAF0-9]* \\s* (?# 33: invalid.illegal.extra-characters.apl) (.*?) | (?# 34: invalid.illegal.apl) ([^\\]]*) ) \\s* (?# 35: punctuation.definition.axis.end.apl) (\\]) )? | (?# 36: entity.function.operands.apl) ( (?# 37: punctuation.definition.operands.begin.apl) (\\() (?# 38: entity.function.operands.left.apl) ( \\s* [A-Z_a-z\xC0-\xD6\xD8-\xDD\xDF\xE0-\xF6\xF8-\xFC\xFE\u2206\u2359\u24B6-\u24CF] [A-Z_a-z\xC0-\xD6\xD8-\xDD\xDF\xE0-\xF6\xF8-\xFC\xFE\u2206\u2359\u24B6-\u24CF\xAF0-9]* )? \\s* (?# 39: entity.function.name.apl) ( [A-Z_a-z\xC0-\xD6\xD8-\xDD\xDF\xE0-\xF6\xF8-\xFC\xFE\u2206\u2359\u24B6-\u24CF] [A-Z_a-z\xC0-\xD6\xD8-\xDD\xDF\xE0-\xF6\xF8-\xFC\xFE\u2206\u2359\u24B6-\u24CF\xAF0-9]* ) \\s*? (?# 40: entity.function.axis.apl) ( (?# 41: punctuation.definition.axis.begin.apl) (\\[) \\s* (?: \\s* [A-Z_a-z\xC0-\xD6\xD8-\xDD\xDF\xE0-\xF6\xF8-\xFC\xFE\u2206\u2359\u24B6-\u24CF] [A-Z_a-z\xC0-\xD6\xD8-\xDD\xDF\xE0-\xF6\xF8-\xFC\xFE\u2206\u2359\u24B6-\u24CF\xAF0-9]* \\s* (?# 42: invalid.illegal.extra-characters.apl) (.*?) | (?# 43: invalid.illegal.apl) ([^\\]]*) ) \\s* (?# 44: punctuation.definition.axis.end.apl) (\\]) )? \\s* (?# 45: entity.function.operands.right.apl) ( [A-Z_a-z\xC0-\xD6\xD8-\xDD\xDF\xE0-\xF6\xF8-\xFC\xFE\u2206\u2359\u24B6-\u24CF] [A-Z_a-z\xC0-\xD6\xD8-\xDD\xDF\xE0-\xF6\xF8-\xFC\xFE\u2206\u2359\u24B6-\u24CF\xAF0-9]* \\s* )? (?# 46: punctuation.definition.operands.end.apl) (\\)) ) ) \\s* (?# 47: entity.function.arguments.right.apl) ( (?<=\\s|\\]) [A-Z_a-z\xC0-\xD6\xD8-\xDD\xDF\xE0-\xF6\xF8-\xFC\xFE\u2206\u2359\u24B6-\u24CF] [A-Z_a-z\xC0-\xD6\xD8-\xDD\xDF\xE0-\xF6\xF8-\xFC\xFE\u2206\u2359\u24B6-\u24CF\xAF0-9]* | \\s* (\\()   (?# 48: punctuation.definition.arguments.begin.apl) (?: \\s* [A-Z_a-z\xC0-\xD6\xD8-\xDD\xDF\xE0-\xF6\xF8-\xFC\xFE\u2206\u2359\u24B6-\u24CF] [A-Z_a-z\xC0-\xD6\xD8-\xDD\xDF\xE0-\xF6\xF8-\xFC\xFE\u2206\u2359\u24B6-\u24CF\xAF0-9]* \\s* )* (\\))   (?# 49: punctuation.definition.arguments.end.apl) )? (?#==================) ) \\s* (?# 50: invalid.illegal.arguments.right.apl) ([^;]+)? (?# 51: entity.function.local-variables.apl) ( (?# 52: Include \u201C;\u201D) ( (?> \\s* ; (?: \\s* [\u2395A-Z_a-z\xC0-\xD6\xD8-\xDD\xDF\xE0-\xF6\xF8-\xFC\xFE\u2206\u2359\u24B6-\u24CF] [A-Z_a-z\xC0-\xD6\xD8-\xDD\xDF\xE0-\xF6\xF8-\xFC\xFE\u2206\u2359\u24B6-\u24CF\xAF0-9]* \\s* )+ )+ ) | (?# 53: invalid.illegal.local-variables.apl) ([^\u235D]+) )? \\s* (?# 54: comment.line.apl) (\u235D.*)? $",beginCaptures:{0:{name:"entity.function.definition.apl"},1:{name:"keyword.operator.nabla.apl"},2:{name:"entity.function.return-value.apl"},3:{name:"entity.function.return-value.shy.apl"},4:{name:"punctuation.definition.return-value.begin.apl"},5:{name:"punctuation.definition.return-value.end.apl"},6:{name:"punctuation.definition.return-value.begin.apl"},7:{name:"punctuation.definition.return-value.end.apl"},8:{name:"punctuation.definition.return-value.begin.apl"},9:{name:"punctuation.definition.return-value.end.apl"},10:{name:"punctuation.definition.return-value.begin.apl"},11:{name:"punctuation.definition.return-value.end.apl"},12:{name:"keyword.operator.assignment.apl"},13:{name:"entity.function.name.apl",patterns:[{include:"#embolden"}]},14:{name:"entity.function.axis.apl"},15:{name:"punctuation.definition.axis.begin.apl"},16:{name:"invalid.illegal.extra-characters.apl"},17:{name:"invalid.illegal.apl"},18:{name:"punctuation.definition.axis.end.apl"},19:{name:"entity.function.arguments.right.apl"},20:{name:"punctuation.definition.arguments.begin.apl"},21:{name:"punctuation.definition.arguments.end.apl"},22:{name:"entity.function.arguments.left.apl"},23:{name:"entity.function.arguments.left.optional.apl"},24:{name:"punctuation.definition.arguments.begin.apl"},25:{name:"punctuation.definition.arguments.end.apl"},26:{name:"punctuation.definition.arguments.begin.apl"},27:{name:"punctuation.definition.arguments.end.apl"},28:{name:"punctuation.definition.arguments.begin.apl"},29:{name:"punctuation.definition.arguments.end.apl"},30:{name:"entity.function.name.apl",patterns:[{include:"#embolden"}]},31:{name:"entity.function.axis.apl"},32:{name:"punctuation.definition.axis.begin.apl"},33:{name:"invalid.illegal.extra-characters.apl"},34:{name:"invalid.illegal.apl"},35:{name:"punctuation.definition.axis.end.apl"},36:{name:"entity.function.operands.apl"},37:{name:"punctuation.definition.operands.begin.apl"},38:{name:"entity.function.operands.left.apl"},39:{name:"entity.function.name.apl",patterns:[{include:"#embolden"}]},40:{name:"entity.function.axis.apl"},41:{name:"punctuation.definition.axis.begin.apl"},42:{name:"invalid.illegal.extra-characters.apl"},43:{name:"invalid.illegal.apl"},44:{name:"punctuation.definition.axis.end.apl"},45:{name:"entity.function.operands.right.apl"},46:{name:"punctuation.definition.operands.end.apl"},47:{name:"entity.function.arguments.right.apl"},48:{name:"punctuation.definition.arguments.begin.apl"},49:{name:"punctuation.definition.arguments.end.apl"},50:{name:"invalid.illegal.arguments.right.apl"},51:{name:"entity.function.local-variables.apl"},52:{patterns:[{match:";",name:"punctuation.separator.apl"}]},53:{name:"invalid.illegal.local-variables.apl"},54:{name:"comment.line.apl"}},end:"^\\s*?(?:(\u2207)|(\u236B))\\s*?(\u235D.*?)?$",endCaptures:{1:{name:"keyword.operator.nabla.apl"},2:{name:"keyword.operator.lock.apl"},3:{name:"comment.line.apl"}},name:"meta.function.apl",patterns:[{captures:{0:{name:"entity.function.local-variables.apl"},1:{patterns:[{match:";",name:"punctuation.separator.apl"}]}},match:`(?x)
^\\s*
(
(?>
;
(?:
\\s*
[\u2395A-Z_a-z\xC0-\xD6\xD8-\xDD\xDF\xE0-\xF6\xF8-\xFC\xFE\u2206\u2359\u24B6-\u24CF]
[A-Z_a-z\xC0-\xD6\xD8-\xDD\xDF\xE0-\xF6\xF8-\xFC\xFE\u2206\u2359\u24B6-\u24CF\xAF0-9]*
\\s*
)+
)+
)`,name:"entity.function.definition.apl"},{include:"$self"}]}]},"embedded-apl":{patterns:[{begin:"(?i)(<(\\?|%)(?:apl(?=\\s+)|=))",beginCaptures:{1:{name:"punctuation.section.embedded.begin.apl"}},end:"(?<=\\s)(\\2>)",endCaptures:{1:{name:"punctuation.section.embedded.end.apl"}},name:"meta.embedded.block.apl",patterns:[{include:"#main"}]}]},embolden:{patterns:[{match:".+",name:"markup.bold.identifier.apl"}]},heredocs:{patterns:[{begin:`^.*?\u2395INP\\s+('|")((?i).*?HTML?.*?|END-OF-\u2395INP)\\1.*$`,beginCaptures:{0:{patterns:[{include:"#main"}]}},contentName:"text.embedded.html.basic",end:"^.*?\\2.*?$",endCaptures:{0:{name:"constant.other.apl"}},name:"meta.heredoc.apl",patterns:[{include:"text.html.basic"},{include:"#embedded-apl"}]},{begin:`^.*?\u2395INP\\s+('|")((?i).*?(?:XML|XSLT|SVG|RSS).*?)\\1.*$`,beginCaptures:{0:{patterns:[{include:"#main"}]}},contentName:"text.embedded.xml",end:"^.*?\\2.*?$",endCaptures:{0:{name:"constant.other.apl"}},name:"meta.heredoc.apl",patterns:[{include:"text.xml"},{include:"#embedded-apl"}]},{begin:`^.*?\u2395INP\\s+('|")((?i).*?(?:CSS|stylesheet).*?)\\1.*$`,beginCaptures:{0:{patterns:[{include:"#main"}]}},contentName:"source.embedded.css",end:"^.*?\\2.*?$",endCaptures:{0:{name:"constant.other.apl"}},name:"meta.heredoc.apl",patterns:[{include:"source.css"},{include:"#embedded-apl"}]},{begin:`^.*?\u2395INP\\s+('|")((?i).*?(?:JS(?!ON)|(?:ECMA|J|Java).?Script).*?)\\1.*$`,beginCaptures:{0:{patterns:[{include:"#main"}]}},contentName:"source.embedded.js",end:"^.*?\\2.*?$",endCaptures:{0:{name:"constant.other.apl"}},name:"meta.heredoc.apl",patterns:[{include:"source.js"},{include:"#embedded-apl"}]},{begin:`^.*?\u2395INP\\s+('|")((?i).*?(?:JSON).*?)\\1.*$`,beginCaptures:{0:{patterns:[{include:"#main"}]}},contentName:"source.embedded.json",end:"^.*?\\2.*?$",endCaptures:{0:{name:"constant.other.apl"}},name:"meta.heredoc.apl",patterns:[{include:"source.json"},{include:"#embedded-apl"}]},{begin:`^.*?\u2395INP\\s+('|")(?i)((?:Raw|Plain)?\\s*Te?xt)\\1.*$`,beginCaptures:{0:{patterns:[{include:"#main"}]}},contentName:"text.embedded.plain",end:"^.*?\\2.*?$",endCaptures:{0:{name:"constant.other.apl"}},name:"meta.heredoc.apl",patterns:[{include:"#embedded-apl"}]},{begin:`^.*?\u2395INP\\s+('|")(.*?)\\1.*$`,beginCaptures:{0:{patterns:[{include:"#main"}]}},end:"^.*?\\2.*?$",endCaptures:{0:{name:"constant.other.apl"}},name:"meta.heredoc.apl",patterns:[{include:"$self"}]}]},label:{patterns:[{captures:{1:{name:"entity.label.name.apl"},2:{name:"punctuation.definition.label.end.apl"}},match:`(?x)
^\\s*
(
[A-Z_a-z\xC0-\xD6\xD8-\xDD\xDF\xE0-\xF6\xF8-\xFC\xFE\u2206\u2359\u24B6-\u24CF]
[A-Z_a-z\xC0-\xD6\xD8-\xDD\xDF\xE0-\xF6\xF8-\xFC\xFE\u2206\u2359\u24B6-\u24CF\xAF0-9]*
)
(:)`,name:"meta.label.apl"}]},lambda:{begin:"\\{",beginCaptures:{0:{name:"punctuation.definition.lambda.begin.apl"}},end:"\\}",endCaptures:{0:{name:"punctuation.definition.lambda.end.apl"}},name:"meta.lambda.function.apl",patterns:[{include:"#main"},{include:"#lambda-variables"}]},"lambda-variables":{patterns:[{match:"\u237A\u237A",name:"constant.language.lambda.operands.left.apl"},{match:"\u2375\u2375",name:"constant.language.lambda.operands.right.apl"},{match:"[\u237A\u2376]",name:"constant.language.lambda.arguments.left.apl"},{match:"[\u2375\u2379]",name:"constant.language.lambda.arguments.right.apl"},{match:"\u03C7",name:"constant.language.lambda.arguments.axis.apl"},{match:"\u2207\u2207",name:"constant.language.lambda.operands.self.operator.apl"},{match:"\u2207",name:"constant.language.lambda.operands.self.function.apl"},{match:"\u03BB",name:"constant.language.lambda.symbol.apl"}]},main:{patterns:[{include:"#class"},{include:"#definition"},{include:"#comment"},{include:"#label"},{include:"#sck"},{include:"#strings"},{include:"#number"},{include:"#lambda"},{include:"#sysvars"},{include:"#symbols"},{include:"#name"}]},name:{patterns:[{match:`(?x)
[A-Z_a-z\xC0-\xD6\xD8-\xDD\xDF\xE0-\xF6\xF8-\xFC\xFE\u2206\u2359\u24B6-\u24CF]
[A-Z_a-z\xC0-\xD6\xD8-\xDD\xDF\xE0-\xF6\xF8-\xFC\xFE\u2206\u2359\u24B6-\u24CF\xAF0-9]*`,name:"variable.other.readwrite.apl"}]},number:{patterns:[{match:"\xAF?[0-9][\xAF0-9A-Za-z]*(?:\\.[\xAF0-9Ee][\xAF0-9A-Za-z]*)*|\xAF?\\.[0-9Ee][\xAF0-9A-Za-z]*",name:"constant.numeric.apl"}]},sck:{patterns:[{captures:{1:{name:"punctuation.definition.sck.begin.apl"}},match:"(?<=\\s|^)(:)[A-Za-z]+",name:"keyword.control.sck.apl"}]},strings:{patterns:[{begin:"'",beginCaptures:{0:{name:"punctuation.definition.string.begin.apl"}},end:"'|$",endCaptures:{0:{name:"punctuation.definition.string.end.apl"}},name:"string.quoted.single.apl",patterns:[{match:"[^']*[^'\\n\\r\\\\]$",name:"invalid.illegal.string.apl"}]},{begin:'"',beginCaptures:{0:{name:"punctuation.definition.string.begin.apl"}},end:'"|$',endCaptures:{0:{name:"punctuation.definition.string.end.apl"}},name:"string.quoted.double.apl",patterns:[{match:'[^"]*[^"\\n\\r\\\\]$',name:"invalid.illegal.string.apl"}]}]},symbols:{patterns:[{match:"(?<=\\s)\u2190(?=\\s|$)",name:"keyword.spaced.operator.assignment.apl"},{match:"(?<=\\s)\u2192(?=\\s|$)",name:"keyword.spaced.control.goto.apl"},{match:"(?<=\\s)\u2261(?=\\s|$)",name:"keyword.spaced.operator.identical.apl"},{match:"(?<=\\s)\u2262(?=\\s|$)",name:"keyword.spaced.operator.not-identical.apl"},{match:"\\+",name:"keyword.operator.plus.apl"},{match:"[-\u2212]",name:"keyword.operator.minus.apl"},{match:"\xD7",name:"keyword.operator.times.apl"},{match:"\xF7",name:"keyword.operator.divide.apl"},{match:"\u230A",name:"keyword.operator.floor.apl"},{match:"\u2308",name:"keyword.operator.ceiling.apl"},{match:"[\u2223|]",name:"keyword.operator.absolute.apl"},{match:"[\u22C6*]",name:"keyword.operator.exponent.apl"},{match:"\u235F",name:"keyword.operator.logarithm.apl"},{match:"\u25CB",name:"keyword.operator.circle.apl"},{match:"!",name:"keyword.operator.factorial.apl"},{match:"\u2227",name:"keyword.operator.and.apl"},{match:"\u2228",name:"keyword.operator.or.apl"},{match:"\u2372",name:"keyword.operator.nand.apl"},{match:"\u2371",name:"keyword.operator.nor.apl"},{match:"<",name:"keyword.operator.less.apl"},{match:"\u2264",name:"keyword.operator.less-or-equal.apl"},{match:"=",name:"keyword.operator.equal.apl"},{match:"\u2265",name:"keyword.operator.greater-or-equal.apl"},{match:">",name:"keyword.operator.greater.apl"},{match:"\u2260",name:"keyword.operator.not-equal.apl"},{match:"[\u223C~]",name:"keyword.operator.tilde.apl"},{match:"\\?",name:"keyword.operator.random.apl"},{match:"[\u220A\u2208]",name:"keyword.operator.member-of.apl"},{match:"\u2377",name:"keyword.operator.find.apl"},{match:",",name:"keyword.operator.comma.apl"},{match:"\u236A",name:"keyword.operator.comma-bar.apl"},{match:"\u2337",name:"keyword.operator.squad.apl"},{match:"\u2373",name:"keyword.operator.iota.apl"},{match:"\u2374",name:"keyword.operator.rho.apl"},{match:"\u2191",name:"keyword.operator.take.apl"},{match:"\u2193",name:"keyword.operator.drop.apl"},{match:"\u22A3",name:"keyword.operator.left.apl"},{match:"\u22A2",name:"keyword.operator.right.apl"},{match:"\u22A4",name:"keyword.operator.encode.apl"},{match:"\u22A5",name:"keyword.operator.decode.apl"},{match:"\\/",name:"keyword.operator.slash.apl"},{match:"\u233F",name:"keyword.operator.slash-bar.apl"},{match:"\\x5C",name:"keyword.operator.backslash.apl"},{match:"\u2340",name:"keyword.operator.backslash-bar.apl"},{match:"\u233D",name:"keyword.operator.rotate-last.apl"},{match:"\u2296",name:"keyword.operator.rotate-first.apl"},{match:"\u2349",name:"keyword.operator.transpose.apl"},{match:"\u234B",name:"keyword.operator.grade-up.apl"},{match:"\u2352",name:"keyword.operator.grade-down.apl"},{match:"\u2339",name:"keyword.operator.quad-divide.apl"},{match:"\u2261",name:"keyword.operator.identical.apl"},{match:"\u2262",name:"keyword.operator.not-identical.apl"},{match:"\u2282",name:"keyword.operator.enclose.apl"},{match:"\u2283",name:"keyword.operator.pick.apl"},{match:"\u2229",name:"keyword.operator.intersection.apl"},{match:"\u222A",name:"keyword.operator.union.apl"},{match:"\u234E",name:"keyword.operator.hydrant.apl"},{match:"\u2355",name:"keyword.operator.thorn.apl"},{match:"\u2286",name:"keyword.operator.underbar-shoe-left.apl"},{match:"\u2378",name:"keyword.operator.underbar-iota.apl"},{match:"\xA8",name:"keyword.operator.each.apl"},{match:"\u2364",name:"keyword.operator.rank.apl"},{match:"\u2338",name:"keyword.operator.quad-equal.apl"},{match:"\u2368",name:"keyword.operator.commute.apl"},{match:"\u2363",name:"keyword.operator.power.apl"},{match:"\\.",name:"keyword.operator.dot.apl"},{match:"\u2218",name:"keyword.operator.jot.apl"},{match:"\u2360",name:"keyword.operator.quad-colon.apl"},{match:"&",name:"keyword.operator.ampersand.apl"},{match:"\u2336",name:"keyword.operator.i-beam.apl"},{match:"\u233A",name:"keyword.operator.quad-diamond.apl"},{match:"@",name:"keyword.operator.at.apl"},{match:"\u25CA",name:"keyword.operator.lozenge.apl"},{match:";",name:"keyword.operator.semicolon.apl"},{match:"\xAF",name:"keyword.operator.high-minus.apl"},{match:"\u2190",name:"keyword.operator.assignment.apl"},{match:"\u2192",name:"keyword.control.goto.apl"},{match:"\u236C",name:"constant.language.zilde.apl"},{match:"\u22C4",name:"keyword.operator.diamond.apl"},{match:"\u236B",name:"keyword.operator.lock.apl"},{match:"\u2395",name:"keyword.operator.quad.apl"},{match:"##",name:"constant.language.namespace.parent.apl"},{match:"#",name:"constant.language.namespace.root.apl"},{match:"\u233B",name:"keyword.operator.quad-jot.apl"},{match:"\u233C",name:"keyword.operator.quad-circle.apl"},{match:"\u233E",name:"keyword.operator.circle-jot.apl"},{match:"\u2341",name:"keyword.operator.quad-slash.apl"},{match:"\u2342",name:"keyword.operator.quad-backslash.apl"},{match:"\u2343",name:"keyword.operator.quad-less.apl"},{match:"\u2344",name:"keyword.operator.greater.apl"},{match:"\u2345",name:"keyword.operator.vane-left.apl"},{match:"\u2346",name:"keyword.operator.vane-right.apl"},{match:"\u2347",name:"keyword.operator.quad-arrow-left.apl"},{match:"\u2348",name:"keyword.operator.quad-arrow-right.apl"},{match:"\u234A",name:"keyword.operator.tack-down.apl"},{match:"\u234C",name:"keyword.operator.quad-caret-down.apl"},{match:"\u234D",name:"keyword.operator.quad-del-up.apl"},{match:"\u234F",name:"keyword.operator.vane-up.apl"},{match:"\u2350",name:"keyword.operator.quad-arrow-up.apl"},{match:"\u2351",name:"keyword.operator.tack-up.apl"},{match:"\u2353",name:"keyword.operator.quad-caret-up.apl"},{match:"\u2354",name:"keyword.operator.quad-del-down.apl"},{match:"\u2356",name:"keyword.operator.vane-down.apl"},{match:"\u2357",name:"keyword.operator.quad-arrow-down.apl"},{match:"\u2358",name:"keyword.operator.underbar-quote.apl"},{match:"\u235A",name:"keyword.operator.underbar-diamond.apl"},{match:"\u235B",name:"keyword.operator.underbar-jot.apl"},{match:"\u235C",name:"keyword.operator.underbar-circle.apl"},{match:"\u235E",name:"keyword.operator.quad-quote.apl"},{match:"\u2361",name:"keyword.operator.dotted-tack-up.apl"},{match:"\u2362",name:"keyword.operator.dotted-del.apl"},{match:"\u2365",name:"keyword.operator.dotted-circle.apl"},{match:"\u2366",name:"keyword.operator.stile-shoe-up.apl"},{match:"\u2367",name:"keyword.operator.stile-shoe-left.apl"},{match:"\u2369",name:"keyword.operator.dotted-greater.apl"},{match:"\u236D",name:"keyword.operator.stile-tilde.apl"},{match:"\u236E",name:"keyword.operator.underbar-semicolon.apl"},{match:"\u236F",name:"keyword.operator.quad-not-equal.apl"},{match:"\u2370",name:"keyword.operator.quad-question.apl"}]},sysvars:{patterns:[{captures:{1:{name:"punctuation.definition.quad.apl"},2:{name:"punctuation.definition.quad-quote.apl"}},match:"(?:(\u2395)|(\u235E))[A-Za-z]*",name:"support.system.variable.apl"}]}},scopeName:"source.apl",embeddedLangs:["html","xml","css","javascript","json"]}),m=[...n,...t,...e,...a,...u,o];export{m as default};
