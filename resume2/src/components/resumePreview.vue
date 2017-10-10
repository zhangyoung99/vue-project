<template>
    <div id="resumePreview">
        <section data-name="profile" v-model="resume.profile">
            <h1>{{resume.profile.name}}</h1>
            <h2>{{resume.profile.title}}</h2>
            <p>{{resume.profile.city}}</p>
        </section>

        <section data-name="workExperience" v-model="resume.workExperience">
            <h2>工作经历</h2>
            <ol>
              <li v-for="item in resume.workExperience">
                <h3>{{item.company}}</h3>
                <p v-show="item.content">{{item.content}}</p>
              </li>
            </ol>
        </section>

        <section data-name="projects" v-model="resume.projects">
            <h2>项目经历</h2>
            <ol>
                <li v-for="item in resume.projects">
                    <h3>{{item.name}}</h3>
                    <p v-show="item.content">{{item.content}}</p>
                </li>
            </ol>
        </section>

        <section data-name="education" v-model="resume.education">
            <h2>教育经历</h2>
            <ol>
                <li v-for="item in resume.education">
                    <h3>{{item.school}}</h3>
                    <p v-show="item.content">{{item.content}}</p>
                </li>
            </ol>
        </section>
        <section data-name="contacts" v-model="resume.contacts">
            <h2>联系方式</h2>
            <ol>
                <li v-for="item in resume.contacts">
                    <p>{{item.tel}}</p>
                    <p>{{item.email}}</p>
                </li>
            </ol>
        </section>
    </div>
</template>

<script>

export default {
    name: 'resumePreview',
    computed:{
        resume(){
            return this.$store.state.resume
        }
    }
}

</script>

<style lang="scss">
    #resumePreview {
        // height: 100vh;
        background: #fff;
        box-shadow:0 1px 3px 0 rgba(0,0,0,0.25);
        padding: 2rem;
        color: #333;
        overflow: auto;
        ol {
            list-style: none;
        }
        >section{
            margin-bottom: 1rem;
            h1 {
                margin-bottom: .2rem;
            }
            h2 {
                margin-bottom: .5rem;
            }
        }
    }
</style>