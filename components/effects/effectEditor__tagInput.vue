<template>
    <div>
        <input class="input__singleLine" v-model="tagInputText" @keyup="changeInput" />
        <ul class="tagList">
            <li class="tagItem" v-for="(tag, index) in value" :key="tag">
                {{ tag }}
                <div class="tagItem__removeIcon"> <a @click="removeSubstance(index)"> <i class="fa fa-times-circle"> </i> </a> </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: ['value'],
    data() {
        return {
            tagInputText: '',
        }
    },
    methods: {
        changeInput(e) {
            if (e.keyCode === 13) {
                if (this.value.indexOf(e.target.value) === -1) {
                    this.$emit('input', [e.target.value.trim()].concat(this.value).sort());
                }
                this.tagInputText = '';
            } else if (e.target.value.indexOf(',') > -1) {
                let arr = e.target.value.split(',').map((val) => val.trim()).filter((val) => val.length > 0);

                let newValue = [];

                arr.forEach((tag) => {
                    if (this.value.indexOf(tag) === -1) {
                        newValue.push(tag)
                    }
                });

                this.$emit('input', newValue.concat(this.value).sort());
                this.tagInputText = '';
            }
        },
        removeSubstance(index) {
            let newArr = this.value.slice();
            newArr.splice(index, 1);
            this.$emit('input', newArr);
        }

    }
}
</script>

<style scoped>

.tagItem {
    display: inline-block;
    width: 200px;
    color: black;
    background-color: #F5F5F5;
    padding-left: 10px;
    border: 1px dotted #CCC;
    margin: 3px;
    padding: 7px;
    border-radius: 15px;
}

.tagItem a {
    color: #555;
}

.tagItem a:hover {
    color: rgb(134, 19, 19);
}

.tagList {
    list-style: none;
    max-height: 300px;
    overflow-y: auto;
    font-size: 14px;
    margin-top: 1em;
    padding: 0;
}

.tagItem__removeIcon {
    float: right;
}



</style>