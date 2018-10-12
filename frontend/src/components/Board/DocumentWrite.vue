<template>
    <div class="DocumentWrite__Wrapper">
        <section>
            <form v-on:submit.prevent="submit">
                <header>
                    <div class="info">
                        <form-group id="InputTitle"
                                    class="input_info"
                                    horizontal
                                    label="제목:"
                                    label-for="title">
                            <form-input id="title"
                                        type="text"
                                        v-model="title"
                                        required
                                        placeholder="제목">
                            </form-input>
                        </form-group>
                        <form-group id="Inputfile"
                                    class="input_info"
                                    horizontal
                                    label="첨부파일:"
                                    label-for="file">
                            <form-file id="file"
                                       v-model="file"
                                       placeholder="첨부파일">
                            </form-file>
                        </form-group>
                    </div>
                </header>
                <form-group class="input_content"
                            label-for="content">
                    <form-textarea id="content"
                                   v-model="content"
                                   required
                                   placeholder="내용"
                                   :rows="20">
                    </form-textarea>
                </form-group>
                <button type="submit" class="submit">완료</button>
            </form>
        </section>
    </div>
</template>

<script>
    import Category from './Category.vue'
    import Form from "bootstrap-vue/src/components/form/form";
    import FormInput from "bootstrap-vue/src/components/form-input/form-input";
    import FormGroup from "bootstrap-vue/src/components/form-group/form-group";
    import FormSelect from "bootstrap-vue/src/components/form-select/form-select";
    import FormFile from "bootstrap-vue/src/components/form-file/form-file";
    import FormTextarea from "bootstrap-vue/src/components/form-textarea/form-textarea";

    export default {
        name: "document-write",
        components: {
            FormTextarea,
            FormFile,
            FormSelect,
            FormGroup,
            FormInput,
            Form,
            Category
        },
        computed: {
            board_idx() {
                return this.$route.params.board_idx;
            },
            document_idx() {
                return this.$route.params.document_idx;
            }
        },
        methods: {
            submit () {
                if(this.$route.params.board_idx === 0) {
                    this.$http.post('/api/notices',{
                        title: this.title,
                        file: this.file,
                        content: this.content
                    }).then(response=> {
                        this.$router.push({name: 'BoardDocument', params: { borad_idx: 0, document_idx: response.data.idx }});
                    }).catch(err =>{
                        if (!err.response.data || !err.response.data.message)
                        {
                            alert('알 수 없는 오류가 발생하였습니다.');
                            return;
                        }
                        alert(err.response.data.message);
                    });
                }
                else {
                    this.$http.post('/api/boards/' + this.board_idx + '/documents',{
                        title: this.title,
                        file: this.file,
                        content: this.content
                    }).then(response=> {
                        this.$router.push({name: 'BoardDocument', params: { borad_idx: this.board_idx, document_idx: response.data.idx }});
                    }).catch(err =>{
                        if (!err.response.data || !err.response.data.message)
                        {
                            alert('알 수 없는 오류가 발생하였습니다.');
                            return;
                        }
                        alert(err.response.data.message);
                    });
                }
            }
        },

        data () {
            return {
                options: [
                    { value: null, text: "선택" },
                    { value: 1, text: "히오스 소모임" },
                    { value: 2, text: "자유게시판" },
                    { value: 3, text: "웹 스터디" }
                ],
                title: '',
                board: '',
                file: '',
                content: '',
            };
        }
    }
</script>

<style scoped>
    section {
        width: 1200px;
        margin: 0px auto;
    }
    header {
        border-top: 3px solid #444;
        border-bottom: 1px solid #ddd;
        margin: 20px 0;
    }
    .DocumentWrite__Wrapper header .info {
        padding: 20px;
    }
    .DocumentWrite__Wrapper header div {
        font-size: 14px;
        padding: 0 10px;
        line-height: 30px;
        background: #f0f0f0;
        margin: 0;
    }
    .DocumentWrite__Wrapper .input_info {
        margin: 10px 0;
    }
    .DocumentWrite__Wrapper textarea{

    }
    .DocumentWrite__Wrapper .image_preview {
        margin: 20px 0;
    }
    .DocumentWrite__Wrapper .submit {
        width: 100px;
        height: 40px;
        border-radius: 4px;
        background: #059162;
        border: 3px solid #e8e8e8;
        color: #fff;
        float: right;
    }
    section:after {
        clear: both;
        content: '';
        display: block;
        margin-bottom: 200px;
    }
</style>