
import {generateImages} from '../utils/generateImages'


export const projects = [
  {
    id: 1,
    title: "Good example of case management test",
    description:
      'مشروع تجريبي يختبر قوة إدارة الحالة في React من خلال بناء نظام بسيط لعربة التسوق. يعتمد على مزامنة الحالة بين الـ store المحلي وقاعدة بيانات خارجية (json-server) لضمان حفظ التعديلات في الوقت الحقيقي..',
    image: generateImages('/images/projects/Project1/', 2),
    url: 'https://github.com/Hanafi6/react-product-cart-test',
  },
  {
    id: 2,
    title: 'تطبيق ملاحظات',
    description: 'تطبيق لإدارة الملاحظات باستخدام React وZustand وReact Query.',
    image: generateImages('/images/projects/Project2/', 5),
    url: 'https://github.com/Hanafi6/Friend-verse.git',
  }
];

