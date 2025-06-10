import {Injectable} from "@angular/core";
import {formatDate} from "@angular/common";

@Injectable({providedIn: 'root'})
export class UserService {

  user: { id: number, name: string, age: number, address: string, company: string, birthDate: string } [] = [
    {id:1, name: 'Nguyễn Văn A', age: 32, address: '123 Nguyễn Văn Linh', company: 'ABC', birthDate: '12/12/2020' },
    {id:2, name: 'Trần Thị B', age: 28, address: '456 Lê Lợi', company: 'DEF', birthDate: '05/08/1996' },
    {id:3, name: 'Lê Văn C', age: 40, address: '789 Trần Hưng Đạo', company: 'GHI', birthDate: '22/03/1984' },
    {id:4, name: 'Phạm Thị D', age: 25, address: '321 Hai Bà Trưng', company: 'JKL', birthDate: '10/11/1999' },
    {id:5, name: 'Hoàng Văn E', age: 35, address: '654 Nguyễn Trãi', company: 'MNO', birthDate: '30/04/1989' },
    {id:6, name: 'Đỗ Minh F', age: 30, address: '17 Nguyễn Huệ', company: 'PQR', birthDate: '15/07/1993' },
    {id:7, name: 'Vũ Thị G', age: 29, address: '29 Phan Đình Phùng', company: 'STU', birthDate: '21/01/1995' },
    {id:8, name: 'Phan Văn H', age: 37, address: '11 Pasteur', company: 'VWX', birthDate: '18/09/1986' },
    {id:9, name: 'Ngô Quang I', age: 42, address: '200 Lý Thường Kiệt', company: 'YZA', birthDate: '12/02/1982' },
    {id:10, name: 'Hồ Thị J', age: 26, address: '88 Nguyễn Du', company: 'BCD', birthDate: '03/06/1998' },
    {id:11, name: 'Đặng Văn K', age: 33, address: '55 Lê Văn Sỹ', company: 'EFG', birthDate: '20/12/1990' },
    {id:12, name: 'Lý Thị L', age: 31, address: '77 Hai Tháng Chín', company: 'HIJ', birthDate: '01/01/1993' },
    {id:13, name: 'Tạ Thanh M', age: 29, address: '34 Điện Biên Phủ', company: 'KLM', birthDate: '09/05/1995' },
    {id:14, name: 'Trịnh Văn N', age: 36, address: '12 Hoàng Hoa Thám', company: 'NOP', birthDate: '11/04/1988' },
    {id:15, name: 'Bùi Thị O', age: 27, address: '4 Quang Trung', company: 'QRS', birthDate: '23/08/1997' },
    {id:16, name: 'Kiều Văn P', age: 38, address: '69 Hùng Vương', company: 'TUV', birthDate: '16/10/1985' },
    {id:17, name: 'Huỳnh Thị Q', age: 41, address: '105 Trường Chinh', company: 'WXY', birthDate: '27/02/1983' },
    {id:18, name: 'Phùng Văn R', age: 34, address: '27 Nguyễn Tri Phương', company: 'ZAB', birthDate: '19/07/1990' },
    {id:19, name: 'Lâm Thị S', age: 24, address: '19 Võ Văn Tần', company: 'CDE', birthDate: '06/03/2000' },
    {id:20, name: 'Đoàn Văn T', age: 39, address: '82 Nguyễn Đình Chiểu', company: 'FGH', birthDate: '25/11/1985' }
  ];
  getUsers() {
    return this.user;
  }

  addUser(user: { id: number, name: string, age: number, address: string, company: string, birthDate: string }) {
    user.id = this.user.length + 1;
    const format = 'dd/MM/yyyy';

    const locale = 'en-US';
    const date = formatDate(user.birthDate, format, locale);
    user.birthDate=date;
    this.user.push(user);
  }

  deleteUser(id: number) {
    this.user = this.user.filter(user => user.id !== id);
  }

  updateUser(user: { id: number, name: string, age: number, address: string, company: string, birthDate: string }) {
    const format = 'dd/MM/yyyy';
    const locale = 'en-US';
    const date = formatDate(user.birthDate, format, locale);
    user.birthDate=date;
    this.user = this.user.map(u => u.id === user.id ? user : u)
  }
  searchByUser(name: string) {
    if (name == "" ) {
      return this.user;
    }
    console.log(name);
    return this.user.filter(user => user.name.includes(name));
  }
  constructor() {
  }
}
