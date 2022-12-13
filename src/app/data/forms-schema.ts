export const FormsSchema: any = {
  name: {
    name: '暱稱',
    type: 'text',
    error: '暱稱至少 2 個字元以上',
    validates: {
      isRequired: true,
      minlength: 2
    }
  },
  email: {
    name: 'Email 信箱',
    type: 'email',
    error: '必填欄位，請輸入您的 E-Mail',
    validates: {
      isRequired: true
    }
  },
  password: {
    name: '密碼',
    type: 'password',
    error: {
      default: '密碼需至少 8 碼以上，並英數混合',
      confirm: '密碼不一致'
    },
    validates: {
      isRequired: true,
      minlength: 8,
      pattern: '^(?=.*[0-9])(?=.*[a-zA-Z]).{8,}$'
    }
  },
};
