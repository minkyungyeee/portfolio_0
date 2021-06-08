<?php
$servername = 'localhost';
$username   = 'minkfree94';
$password   = 'alsrud1045!';
$dbname     = 'minkfree94';

$conn = mysqli_connect($servername,$username,$password,$dbname);
mysqli_set_charset($conn,'utf8');

$email = $_POST['email'];
$code = $_POST['code'];

//DB내에 TABLE(email)에 입력하는 SQL 코딩

$sql = "insert into email_table (email) values ('$email')";
$result = mysqli_query($conn,$sql);

//서버(server)가 클라이언트(client)에 응답
echo '<p>축하합니다. 매일 리스트에 저장되었습니다.</p>'.$email; /* .이 문자열과 변수를 이어주는역할 */
//include_once('footer.php');
?>