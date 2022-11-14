<template>
  <!-- 上传图片组件 -->
  <div class="upload">
    <el-upload
        class="avatar-uploader"
        :action="domain"
        :http-request ="uploadImage"
        :show-file-list="false">
      <slot></slot>
    </el-upload>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import request from "@/utils/request.ts";
import { domain, externalDomain } from "@/utils/common-config.ts";
import { AppStore } from "@/store/modules/app";
import axios from "axios";


@Component({})
export default class extends Vue {
  domain = domain;
  externalDomain = externalDomain;

  uploadImage (content: any) {
    // this.NProgress.start();
    // 重命名要上传的文件
    const fileName = +new Date() + content.file.name;
    // 从后端获取上传凭证token

    request('/user/get-qiniu-token').then(res => {
      const formData = new FormData()
      formData.append('file', content.file)
      formData.append('token', res.data.token)
      formData.append('key', fileName)
      /*
      * 另外一种常见的媒体格式是上传文件之时使用的：
      * multipart/form-data ： 需要在表单中进行文件上传时，就需要使用该格式
      * */
      // 获取到凭证之后再将文件上传到七牛云空间

      return axios({
        url: "https://up-z2.qiniup.com",
        method: "POST",
        data: formData
      })
    }).then(res => {
      const imageUrl = this.externalDomain + '/' + res.data.key
      AppStore.Update_Avatar_ImageUrl(imageUrl);
      this.$message.success("更新头像成功");
    })
  }

}
</script>
