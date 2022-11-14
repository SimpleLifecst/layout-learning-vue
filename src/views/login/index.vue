<template>
  <div id="login">
    <div class="container">
      <div class="title">技术论坛</div>
      <el-form :model="model.userInfo" status-icon :rules="model.rules" ref="formRef">
        <el-form-item prop="username">
          <el-input type="username" prefix-icon="el-icon-user-solid" v-model="model.userInfo.username"
            autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input type="password" prefix-icon="el-icon-lock" v-model="model.userInfo.password" autocomplete="off">
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submit" class="submit-button">确认</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { Model } from "@/views/login/Model";

@Component({})
export default class extends Vue {

  public model: Model = new Model();

  submit() {
    (this.$refs["formRef"] as any).validate((valid: boolean) => {
      if (valid) {
        this.model.submit();
      }
    })
  }
}
</script>

<style scoped lang="scss">
#login {
  background-color: #2d3a4b;
  position: absolute;
  width: 100%;
  height: 100%;

  .container {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 420px;
    transform: translate(-50%, -50%);
    border-radius: 10px;

    .title {
      text-align: center;
      font-size: 35px;
      padding: 16px 0;
      font-family: "宋体";
      font-weight: 600;
      color: #fff;
    }
  }

  .submit-button {
    width: 100%;
  }

}
</style>
<style lang="scss">
#login {
  .el-form-item .el-input .el-input__inner {
    background-color: #283443;
    border: 1px solid #3e4957;
    color: #fff;
    height: 55px;
  }
}
</style>
