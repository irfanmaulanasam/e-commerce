<template>
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
    <v-text-field
      v-model="username"
      :counter="22"
      :rules="usernameRules"
      label="username"
      required
    ></v-text-field>

    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      required
    ></v-text-field>
    <v-text-field
      :append-icon="show2 ? 'visibility' : 'visibility_off'"
      :rules="[rules.required, rules.min]"
      :type="show1 ? 'text' : 'password'"
      name="input-10-2"
      label="Password"
      hint="At least 8 characters"
      value="wqfasds"
      class="input-group--focused"
      @click:append="show1 = !show1"
    ></v-text-field>
    <v-container
    id="grid"
    fluid
    grid-list-sm
    tag="section"
  >
    <v-layout row wrap>
      <v-flex tag="h1" class="headline">Welcome to kopilopi!</v-flex>
      <v-flex d-flex xs12 order-xs5>
        <v-layout column>
          <v-flex>
            <v-card flat>
              <v-card-text>This user agreement will be effective for all users as of November 13, 2018.

This user agreement below will be effective for all users as of November 13, 2018 and shall apply through March 28, 2019. You also agree that the version of the user agreement located here shall apply beginning March 29, 2019.

 

Welcome to kopilopi!

This user agreement is a contract between you and kopilopi, Inc. governing your use of your kopilopi account and the kopilopi services. It applies to U.S. kopilopi accounts only. If you are an individual, you must be a resident of the United States or one of its territories and at least 18 years old, or the age of majority in your state of residence to open a U.S. kopilopi account and use the kopilopi services.  If you are a business, the business must be organized in, operating in, or a resident of, the United States or one of its territories to open a U.S. kopilopi account and use the kopilopi services.

By opening and using a kopilopi account, you agree to comply with all of the terms and conditions in this user agreement. The terms include an agreement to resolve disputes by arbitration on an individual basis. You also agree to comply with the following additional policies and each of the other agreements on the Legal Agreements page that apply to you:

    Privacy Statement
    Acceptable Use Policy
    Electronic Communications Delivery Policy (E-Sign Disclosure and Consent)

Please read carefully all of the terms and conditions of this user agreement, terms of these policies and each of the other agreements that apply to you.

We may revise this agreement and any of the policies listed above from time to time.  The revised version will be effective at the time we post it, unless otherwise noted.  If our changes reduce your rights or increase your responsibilities we will post a notice on the Policy Updates page of our website and provide notice to you of at least 30 days. By continuing to use our services after any changes to this user agreement, you agree to abide and be bound by those changes. If you do not agree with any changes to this user agreement, you may close your account.

    </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
    <v-checkbox
      v-model="checkbox"
      :rules="[v => !!v || 'You must agree to continue!']"
      label="Do you agree?"
      required
    ></v-checkbox>

    <v-btn
      :disabled="!valid"
      color="transparent"
      @click="validate"
    >
      Submit
    </v-btn>

    <v-btn
      color="transparent"
      @click="reset"
    >
      Cancel
    </v-btn>
  </v-form>
</template>

<script>
  export default {
    data: () => ({
      show1: false,
      show2: false,
      valid: true,
      username: '',
      usernameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 20) || 'Name must be less than 10 characters'
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(v) || 'E-mail must be valid'
      ],
      password: '',
      rules: {
          required: value => !!value || 'Required.',
          min: v => v.length >= 8 || 'Min 8 characters',
          emailMatch: () => ('The email and password you entered don\'t match'),
      checkbox: false,
      }
    }),

    methods: {
        signup(){
          this.validate()
        },
      validate () {
        if (this.$refs.form.validate()) {
          this.snackbar = true
        }
      },
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      }
    }
  }
</script>
