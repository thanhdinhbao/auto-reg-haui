document.addEventListener('DOMContentLoaded', function () {
    var submitButton = document.getElementById('submitBtn');
  
    submitButton.addEventListener('click', function () {
        
  
      // Gọi hàm JavaScript với giá trị từ dropdown
      executeFunction();
    });
  
    // Hàm JavaScript sẽ được gọi khi nhấn nút submit
    function executeFunction() {
    var dayValue = parseInt(document.getElementById('dropdown1').value,10);
    var timeValue = parseInt(document.getElementById('dropdown2').value,10);
      console.log('Selected day:', dayValue);
      console.log('Selected time:', timeValue);
  
    
    var day = 0;
    var time = 0;
    switch (dayValue) {
      case 1:
        day = 2;
        console.log('Chosen day: Monday');
        break;
      case 2:
      day = 3;
        console.log('Chosen day: Tuesday');
        break;
      case 3:
      day = 4;
        console.log('Chosen day: Wednesday');
        break;
      case 4:
      day = 5;
        console.log('Chosen day: Thursday');
        break;
      case 5:
      day = 6;
        console.log('Chosen day: Friday');
        break;
      case 6:
      day = 7;
        console.log('Chosen day: Saturday');
        break;
      case 7:
      day = 8;
        console.log('Chosen day: Sunday');
        break;
      default:
        // Trường hợp mặc định (nếu có)
        console.log('Invalid day');
    }

    switch (timeValue) {
      case 1:
        time = 1;
        console.log('Chọn buổi sáng!');
        break;
      case 2:
      time = 2;
        console.log('Chọn buổi chiều!');
        break;
      case 3:
      time = 3;
        console.log('Chọn buổi tối!');
        break;
      default:
        // Trường hợp mặc định (nếu có)
        console.log('Chọn lại đê');
    }

    // Tạo URL dựa trên giá trị từ dropdown
    var url = '/ajax/register/actionclassbydate?day=' + day + '&time=' + time;

    // Mở dialog
    //kPortal.OpenDialog(url, 99, 70, 0, 1);

    // In thông báo vào console (tùy chọn)
    console.log('Dialog opened with URL:', url);
    }
  });
  
