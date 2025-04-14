import * as yup from 'yup';

export const registerPageSchema = yup.object().shape({
    username: yup.string().required("Kullanıcı adını boş olamaz"),
    password: yup.string().required("Şifre boş olamaz")
})