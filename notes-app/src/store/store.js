import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)  //不写这句话浏览器控制台就会报错

export default new Vuex.Store({
    state: {
        notes: [],
        activeNote: {}
    },
    getters: {
      notes: state => state.notes,   
      activeNote: state => state.activeNote,
      activeNoteText: state => state.activeNote.text
    },
    mutations: {
        ADD_NOTE (state) {
            const newNote = {
                text: 'new note',
                favorite: false
            }
            state.notes.push(newNote)
            state.activeNote = newNote
        },
        EDIT_NOTE (state,e) {
            state.activeNote.text = e
        },
        DELETE_NOTE (state) {
            let index = state.notes.indexOf(state.notes)
            state.notes.splice(index,1)
        },  
        TOGGLE_FAVORITE (state) {
            state.activeNote.favorite = !state.activeNote.favorite
        },
        SET_ACTIVE_NOTE (state, note) {
          state.activeNote = note
        },
    },
    actions: {
        addNote({ commit }){
           commit('ADD_NOTE')
        },
        editNote({ commit }, e){
            commit('EDIT_NOTE', e.target.value)
        },
        deleteNote({ commit }){
            commit('DELETE_NOTE')
        },
        updateActiveNote({ commit }, note){
            commit('SET_ACTIVE_NOTE', note)
        },
        toggleFavorite ({ commit }){
            commit('TOGGLE_FAVORITE')
        }        
    }
})