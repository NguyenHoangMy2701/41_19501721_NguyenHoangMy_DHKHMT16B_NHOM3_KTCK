$(document).ready(function() {
    var i = 1;
    $("#btn2").click(function() {
        $("#myModal").modal();
    });

    function kiemTraTen() {
        var mauKT = /^([A-Z]{1}[a-z]+)((\s{1}[A-Z]{1}[a-z]+){1,})$/;
        if ($("#Name").val() == "") {
            $("#tbName").html("Không để trống");
            return false;
        }
        if (!mauKT.test($("#Name").val())) {
            $("#tbName").html("Mỗi ký tự viết hoa không sử dụng số");
            return false;

        }
        $("#tbName").html("*");
        return true;

    }
    $("#Name").blur(kiemTraTen);
    //Kiểm tra số áo
    function kiemTraSoAo() {
        var mauKT = /^\d*$/;
        if ($("#Ao").val() == "") {
            $("#tbAo").html("Không để trống");
            return false;
        }
        if (!mauKT.test($("#Ao").val())) {
            $("#tbAo").html("Dùng số từ 1 đến 100");
            return false;

        } else {
            var soAo = $("#Ao").val();
            if (soAo < 1 || soAo > 100) {
                $("#tbAo").html("Số áo chỉ từ 1 đến 100");

            } else {
                $("#tbAo").html("*");
                return true;

            }
        }
    }
    $("#Ao").blur(kiemTraSoAo);
    //Kiểm tra câu lạc bộ
    function kiemTraCaulacbo() {
        var mauKT = /^[A-Z0-9][a-z0-9]*(\s[A-z0-9][a-z0-9]*)*$/;
        if ($("#Clb").val() == "") {
            $("#tbClb").html("Không để trống");
            return false;
        }
        if (!mauKT.test($("#Clb").val())) {
            $("#tbClb").html("Dùng chữ hoa đầu từ và số");
            return false;

        }
        $("#tbClb").html("*");
        return true;

    }
    $("#Clb").blur(kiemTraCaulacbo);
    // Kiểm tra Ngày tập trung
    function kiemTraNTT() {
        if ($("#NTT").val() == "") {
            $("#tbNTT").html("Không để trống");
            return false;
        }
        var today = new Date();
        var ntt = new Date($("#NTT").val());
        today = today.setDate(today.getDate() + 7);
        if (today > ntt) {
            $("#tbNTT").html("Phải sau ngày hiện tại 7 ngày");
            return false;
        }
        $("#tbNTT").html("*");
        return true;
    }
    $("#NTT").blur(kiemTraNTT);

    //Kiểm tra SDT
    function kiemTraSDT() {
        var mauKT = /^0\d{3}\d{3}\d{3}$/;
        if ($("#SDT").val() == "") {
            $("#tbSDT").html("Không để trống");
            return false;
        }
        if (!mauKT.test($("#SDT").val())) {
            $("#tbSDT").html("Theo Dạng 0xxx-xxx-xxx trong đó x là số");
            return false;

        }
        $("#tbSDT").html("*");
        return true;

    }
    $("#SDT").blur(kiemTraSDT);
    //kiểm tra ảnh đại diện
    function kiemtraAnhDaiDien() {
        var hinhanh = $("#Anh").val();
        if (hinhanh === '') {
            $("#tbAnh").html("Phải chọn hình ảnh đại diện");
            return false;
        }

        $("#tbAnh").html("*");
        return true;
    }
    $("#Anh").blur(kiemtraAnhDaiDien);
    //Nút lưu  

    $("#Save").click(function() {
        if (!kiemTraTen() || !kiemTraSoAo() || !kiemTraCaulacbo() || !kiemTraNTT() || !kiemTraSDT() || !kiemtraAnhDaiDien())
            return false;
        row = "<tr>";
        row += "<th>" + (i++) + "</th>";
        row += "<th>" + $("#Name").val() + "</th>";
        row += "<th>" + $("#Ao").val() + "</th>";
        row += "<th>" + $("#Clb").val() + "</th>";
        row += "<th>" + $("#NTT").val() + "</th>";
        row += "<th>" + $("#SDT").val() + "</th>";
        row += "<th>" + $("#Anh").val() + "</th>";
        $("#danhsach").append(row);
        $("#myModal").modal("hide");
    });
});