<template>
    <div class="DocumentWrite__Wrapper">
        <Category></Category>
        <section>
            <form>
                <header>
                    <div class="info">
                        <form-group id="InputBoard"
                                    class="input_info"
                                    horizontal
                                    label="게시판:"
                                    label-for="board">
                            <form-select id="board"
                                         v-model="board"
                                         :options="options"
                                         required>
                            </form-select>
                        </form-group>
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
                            label="본문"
                            label-for="content">
                    <form-textarea id="content"
                                   v-model="content"
                                   placeholder="내용"
                                   :rows="3">
                    </form-textarea>
                </form-group>
            </form>
            <button class="submit_button">완료</button>
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
        data() {
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
            }
        }
    }
</script>

<style scoped>
    section {
        width: 1200px;
        margin: 0 auto;
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
    .submit_button {
        width: 100px;
        height: 40px;
        border-radius: 4px;
        background-color: #e8e8e8;
        border: 1px solid lightgray;
        float: right;
    }
    section:after {
        clear: both;
        content: '';
        display: block;
    }
</style>