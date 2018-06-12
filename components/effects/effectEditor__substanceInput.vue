<template>
    <div>
        <input class="effectEditor__input" v-model="substanceInputText" @keyup="changeInput" />
        <ul class="substanceList">
            <li class="substanceItem" v-for="(substance, index) in value" :key="substance">
                {{ substance }}
                <div class="substanceItem__removeIcon"> <a @click="removeSubstance(index)"> <i class="fa fa-times-circle"> </i> </a> </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: ['value'],
    data() {
        return {
            substanceInputText: '',
        }
    },
    methods: {
        changeInput(e) {
            if (e.keyCode === 13) {
                if (this.value.indexOf(e.target.value) === -1) {
                    this.$emit('input', [e.target.value.trim()].concat(this.value).sort());
                }
                this.substanceInputText = '';
            } else if (e.target.value.indexOf(',') > -1) {
                let arr = e.target.value.split(',').map((val) => val.trim()).filter((val) => val.length > 0);

                let newValue = [];

                arr.forEach((substance) => {
                    if (this.value.indexOf(substance) === -1) {
                        newValue.push(substance)
                    }
                });

                this.$emit('input', newValue.concat(this.value).sort());
                this.substanceInputText = '';
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

.substanceItem {
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

.substanceItem a {
    color: #555;
}

.substanceItem a:hover {
    color: rgb(134, 19, 19);
}

.substanceList {
    list-style: none;
    max-height: 300px;
    overflow-y: auto;
    font-size: 14px;
    margin-top: 1em;
    padding: 0;
}

.substanceItem__removeIcon {
    float: right;
}



</style>