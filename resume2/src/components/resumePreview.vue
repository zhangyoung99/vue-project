<template>
    <div id="resumePreview">
        <section data-name="profile" :value="resume.profile">
            <h1>{{resume.profile.name}}</h1>
            <h3>{{resume.profile.title}}</h3>
            <p>{{resume.profile.city}}</p>
        </section>

        <section data-name="workExperience" :value="resume.workExperience">
            <h2>工作经历</h2>
            <ol>
              <li v-for="item in resume.workExperience" :key="item.workExperience">
                <h3>{{item.company}}</h3>
                <p v-show="item.content">{{item.content}}</p>
              </li>
            </ol>
        </section>

        <section data-name="projects" :value="resume.projects">
            <h2>项目经历</h2>
            <ol>
                <li v-for="item in resume.projects" :key="item.projects">
                    <h3>{{item.name}}</h3>
                    <p v-show="item.content">{{item.content}}</p>
                </li>
            </ol>
        </section>

        <section data-name="education" :value="resume.education">
            <h2>教育经历</h2>
            <ol>
                <li v-for="item in resume.education" :key="item.education">
                    <span>{{item.school}}</span>
                    <span v-show="item.major">{{item.major}}</span>
                    <span>{{item.during}}</span>
                </li>
            </ol>
        </section>
        <section data-name="contacts" :value="resume.contacts">
            <h2>联系方式</h2>
            <ol>
                <li v-for="item in resume.contacts" :key="item.contacts">
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
                padding: 5px;
                background: #dde5ea;
            }
            li {
                margin: 10px;
                h3 {
                    margin: 10px;
                }
            }
        }
    }
</style>