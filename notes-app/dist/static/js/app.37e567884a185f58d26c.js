webpackJsonp([0],[,,function(t,e,o){"use strict";var n=o(1),i=o(23);n.a.use(i.a),e.a=new i.a.Store({state:{notes:[],activeNote:{}},getters:{notes:function(t){return t.notes},activeNote:function(t){return t.activeNote},activeNoteText:function(t){return t.activeNote.text}},mutations:{ADD_NOTE:function(t){var e={text:"new note",favorite:!1};t.notes.push(e),t.activeNote=e},EDIT_NOTE:function(t,e){t.activeNote.text=e},DELETE_NOTE:function(t){var e=t.notes.indexOf(t.notes);t.notes.splice(e,1)},TOGGLE_FAVORITE:function(t){t.activeNote.favorite=!t.activeNote.favorite},SET_ACTIVE_NOTE:function(t,e){t.activeNote=e}},actions:{addNote:function(t){(0,t.commit)("ADD_NOTE")},editNote:function(t,e){(0,t.commit)("EDIT_NOTE",e.target.value)},deleteNote:function(t){(0,t.commit)("DELETE_NOTE")},updateActiveNote:function(t,e){(0,t.commit)("SET_ACTIVE_NOTE",e)},toggleFavorite:function(t){(0,t.commit)("TOGGLE_FAVORITE")}}})},function(t,e,o){function n(t){o(13)}var i=o(0)(o(4),o(20),n,null,null);t.exports=i.exports},function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o(9),i=(o.n(n),o(10)),s=(o.n(i),o(17)),c=o.n(s),a=o(16),r=o.n(a),u=o(15),l=o.n(u);e.default={name:"app",components:{Toolbar:c.a,NoteList:r.a,Editor:l.a}}},function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"Editor",computed:{activeNoteText:function(){return this.$store.getters.activeNoteText}},methods:{editNote:function(){this.$store.dispatch("editNote")}}}},function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"NoteList",data:function(){return{show:"all"}},computed:{notes:function(){return this.$store.getters.notes},activeNote:function(){return this.$store.getters.activeNote},filteredNotes:function(){return"all"===this.show?this.notes:"favorites"===this.show?this.notes.filter(function(t){return t.favorite}):void 0}},methods:{deleteNote:function(){this.$store.dispatch("deleteNote")},updateActiveNote:function(t){this.$store.dispatch("updateActiveNote")}}}},function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"Toolbar",computed:{activeNote:function(){return this.$store.getters.activeNote}},methods:{addNote:function(){this.$store.dispatch("addNote")},deleteNote:function(){this.$store.dispatch("deleteNote")},toggleFavorite:function(){this.$store.dispatch("toggleFavorite")}}}},function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o(1),i=o(3),s=o.n(i),c=o(2);n.a.config.productionTip=!1,new n.a({el:"#app",store:c.a,template:"<App/>",components:{App:s.a}})},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e,o){function n(t){o(14)}var i=o(0)(o(5),o(21),n,null,null);t.exports=i.exports},function(t,e,o){function n(t){o(11)}var i=o(0)(o(6),o(18),n,null,null);t.exports=i.exports},function(t,e,o){function n(t){o(12)}var i=o(0)(o(7),o(19),n,null,null);t.exports=i.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"NoteList"}},[o("div",{staticClass:"list-header"},[o("h2",[t._v("NOTES")]),t._v(" "),o("div",{staticClass:"btn-group",attrs:{role:"group"}},[o("button",{staticClass:"btn btn-default",class:{active:"all"===t.show},attrs:{type:"button"},on:{click:function(e){t.show="all"}}},[t._v("\n           All Notes\n         ")])]),t._v(" "),o("div",{staticClass:"btn-group",attrs:{role:"group"}},[o("button",{staticClass:"btn btn-default",class:{active:"favorites"===t.show},attrs:{type:"button"},on:{click:function(e){t.show="favorites"}}},[t._v("\n          Favorites\n        ")])])]),t._v(" "),o("div",{staticClass:"container"},[o("div",{staticClass:"list-group"},t._l(t.filteredNotes,function(e){return o("li",{staticClass:"list-group-item",class:{active:t.activeNote===e},on:{click:function(o){t.updateActiveNote(e)}}},[o("p",{staticClass:"list-group-item-heading"},[t._v("\n          "+t._s(e.text)+"\n          "),o("i",{staticClass:"btn-del",on:{click:t.deleteNote}},[t._v("x")])])])}))])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"Toolbar"}},[o("i",{staticClass:"glyphicon glyphicon-plus",on:{click:t.addNote}}),t._v(" "),o("i",{staticClass:"glyphicon glyphicon-star",class:{starred:t.activeNote.favorite},on:{click:t.toggleFavorite}}),t._v(" "),o("i",{staticClass:"glyphicon glyphicon-remove",on:{click:t.deleteNote}})])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("Toolbar"),t._v(" "),o("NoteList"),t._v(" "),o("Editor")],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"note-editor"}},[o("textarea",{staticClass:"form-control",domProps:{value:t.activeNoteText},on:{input:t.editNote}})])},staticRenderFns:[]}}],[8]);
//# sourceMappingURL=app.37e567884a185f58d26c.js.map