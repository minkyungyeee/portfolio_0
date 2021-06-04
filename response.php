<?php
include_once('header.php');
//데이터베이스 헤더문() 
//서버이름(localhost)
//사용자이름()
//비밀번호()
//데이터베이스이름 설정

//폼 정보를 변수설정 그리고 저장
$email = $_POST['email'];
$code = $_POST['code'];

//DB내에 TABLE(email)에 입력하는 SQL 코딩

//데이터베이스에 저장(입력)
//sql insert into $email
$sql = "insert into email_table (email) values ('$email')";
$result = mysqli_query($conn,$sql);

//서버(server)가 클라이언트(client)에 응답
echo '<p>축하합니다. 매일 리스트에 저장되었습니다.</p>'.$email.'<br>'.$code; /* .이 문자열과 변수를 이어주는역할 */
include_once('footer.php');
?>