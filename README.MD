# Vutify Validator
This library is inspired by [v8n](https://imbrn.github.io/v8n)

# Usage
```bash
npm i @aptof/vuetify-validator
```

## In vutify form
```javascript
<template>
 <v-form v-model="valid">
                  <v-text-field
                    label="email"
                    type="email"
                    :rules="[rules.email]"
                  ></v-text-field>
                  <v-text-field
                    label="password"
                    type="password"
                    :rules="[rules.password]"
                  ></v-text-field>
                </v-form>
</template>
<script>
import { vv } from "@aptof/vuetify-validator";
export default {
  data() {
    return {
      rules: {
        email: vv()
          .required()
          .email()
          .get(),
        password: vv()
          .required()
          .get()
      }
    };
  },
}
</script>
```