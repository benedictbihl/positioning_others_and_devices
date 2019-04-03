<?php 
 // all the credentials for the db are placed outside of the www directory for security reasons
	$config = parse_ini_file('/var/www/vhosts/hosting1839.af915.netcup.net/httpdocs/digComp/db.ini');
	$conn = new mysqli($config['host'],$config['username'],$config['password'],$config['db']);
	if(!$conn){
			die("Failed to connect to Database"); 
	}

$res = array();
$action = 'read';

if (isset($_GET['action'])) {
	$action = $_GET['action'];
}

if ($action == 'readdistances') {
	$result = $conn->query("SELECT * FROM `chessboard_distances`");
	$entries = array();
	while ($row = $result->fetch_assoc()){
		array_push($entries, $row);
	}
	$res['entries'] = $entries;
}

if ($action == 'readcoords') {
	$result = $conn->query("SELECT * FROM `chessboard_coordinates`");
	$entries = array();
	while ($row = $result->fetch_assoc()){
		array_push($entries, $row);
	}
	$res['entries'] = $entries;
}

if ($action == 'savedistances') {
	$data = json_decode(file_get_contents('php://input'), true);

	$participantID = $data['participantID'];
	$datapoint = $data['datapoint'];
	$mother = $data['mother'];
	$father = $data['father'];
	$sibling = $data['sibling'];
	$spouse = $data['spouse'];
	$relative = $data['relative'];
	$grandparent = $data['grandparent'];
	$friend = $data['friend'];
	$teacher = $data['teacher'];
	$housemate = $data['housemate'];
	$neighbour = $data['neighbour'];
	$boss = $data['boss'];
	$cleric = $data['cleric'];
	$classmate = $data['cleric'];
	$sportsmate = $data['sportsmate'];
	$pet = $data['pet'];
	$mobile = $data['mobile'];
	$voiceassistant = $data['voiceassistant'];
	$tv = $data['tv'];
	$laptop = $data['laptop'];
	$radio = $data['radio'];
	$tablet = $data['tablet'];
	$phone = $data['phone'];
	$videogameconsole = $data['videogameconsole'];
	$pc = $data['pc'];
	$smartwatch = $data['smartwatch'];
	$gps = $data['gps'];

	$result = $conn->query(
		"INSERT INTO chessboard_distances (`participantID`, `datapoint`, `mother`, `father`, `sibling`, `spouse`, `relative`, `grandparent`, `friend`, `teacher`, `housemate`, `neighbour`, `boss`, `cleric`, `classmate`, `sportsmate`, `pet`, `mobile`, `voiceassistant`, `tv`, `laptop`, `radio`, `tablet`, `phone`, `videogameconsole`, `pc`, `smartwatch`, `gps`)
	 VALUES ('$participantID', '$datapoint', '$mother', '$father', '$sibling', '$spouse', '$relative', '$grandparent', '$friend', '$teacher', '$housemate', '$neighbour', '$boss', '$cleric', '$classmate', '$sportsmate', '$pet', '$mobile', '$voiceassistant', '$tv', '$laptop', '$radio', '$tablet', '$phone', '$videogameconsole', '$pc', '$smartwatch', '$gps') 
	 ");

	if ($result) {
		$res['message'] = "Saved arrangement in DB";
	} else{
		echo $conn->error;
		$res['error'] = true;
		$res['message'] = "Error while saving arrangement";
	}
}

if ($action == 'savecoords') {
	$data = json_decode(file_get_contents('php://input'), true);

	$participantID = $data['participantID'];
	$datapoint = $data['datapoint'];
	$mother_x = $data['mother_x'];
	$father_x = $data['father_x'];
	$sibling_x = $data['sibling_x'];
	$spouse_x = $data['spouse_x'];
	$relative_x = $data['relative_x'];
	$grandparent_x = $data['grandparent_x'];
	$friend_x = $data['friend_x'];
	$teacher_x = $data['teacher_x'];
	$housemate_x = $data['housemate_x'];
	$neighbour_x = $data['neighbour_x'];
	$boss_x = $data['boss_x'];
	$cleric_x = $data['cleric_x'];
	$classmate_x = $data['cleric_x'];
	$sportsmate_x = $data['sportsmate_x'];
	$pet_x = $data['pet_x'];
	$mobile_x = $data['mobile_x'];
	$voiceassistant_x = $data['voiceassistant_x'];
	$tv_x = $data['tv_x'];
	$laptop_x = $data['laptop_x'];
	$radio_x = $data['radio_x'];
	$tablet_x = $data['tablet_x'];
	$phone_x = $data['phone_x'];
	$videogameconsole_x = $data['videogameconsole_x'];
	$pc_x = $data['pc_x'];
	$smartwatch_x = $data['smartwatch_x'];
	$gps_x = $data['gps_x'];
	$me_x = $data['me_x'];
	$mother_y = $data['mother_y'];
	$father_y = $data['father_y'];
	$sibling_y = $data['sibling_y'];
	$spouse_y = $data['spouse_y'];
	$relative_y = $data['relative_y'];
	$grandparent_y = $data['grandparent_y'];
	$friend_y = $data['friend_y'];
	$teacher_y = $data['teacher_y'];
	$housemate_y = $data['housemate_y'];
	$neighbour_y = $data['neighbour_y'];
	$boss_y = $data['boss_y'];
	$cleric_y = $data['cleric_y'];
	$classmate_y = $data['cleric_y'];
	$sportsmate_y = $data['sportsmate_y'];
	$pet_y = $data['pet_y'];
	$mobile_y = $data['mobile_y'];
	$voiceassistant_y = $data['voiceassistant_y'];
	$tv_y = $data['tv_y'];
	$laptop_y = $data['laptop_y'];
	$radio_y = $data['radio_y'];
	$tablet_y = $data['tablet_y'];
	$phone_y = $data['phone_y'];
	$videogameconsole_y = $data['videogameconsole_y'];
	$pc_y = $data['pc_y'];
	$smartwatch_y = $data['smartwatch_y'];
	$gps_y = $data['gps_y'];
	$me_y = $data['me_y'];

	$result = $conn->query(
		"INSERT INTO chessboard_coordinates (`participantID`, `datapoint`, `mother_x`, `mother_y`, `father_x`,`father_y`, `sibling_x`, `sibling_y`, `spouse_x`, `spouse_y`, `relative_x`, `relative_y`, `grandparent_x`, `grandparent_y`, `friend_x`, `friend_y`, `teacher_x`, `teacher_y`, `housemate_x`, `housemate_y`, `neighbour_x`, `neighbour_y`, `boss_x`, `boss_y`, `cleric_x`, `cleric_y`, `classmate_x`, `classmate_y`, `sportsmate_x`, `sportsmate_y`, `pet_x`, `pet_y`, `mobile_x`, `mobile_y`, `voiceassistant_x`, `voiceassistant_y`, `tv_x`, `tv_y`, `laptop_x`, `laptop_y`, `radio_x`, `radio_y`, `tablet_x`, `tablet_y`, `phone_x`, `phone_y`,`videogameconsole_x`, `videogameconsole_y`, `pc_x`, `pc_y`, `smartwatch_x`, `smartwatch_y`, `gps_x`, `gps_y`, `me_x`, `me_y`)
	 VALUES ('$participantID', '$datapoint', '$mother_x', '$mother_y', '$father_x','$father_y', '$sibling_x', '$sibling_y', '$spouse_x', '$spouse_y', '$relative_x', '$relative_y', '$grandparent_x', '$grandparent_y', '$friend_x', '$friend_y', '$teacher_x', '$teacher_y', '$housemate_x', '$housemate_y', '$neighbour_x', '$neighbour_y', '$boss_x', '$boss_y', '$cleric_x', '$cleric_y', '$classmate_x', '$classmate_y', '$sportsmate_x', '$sportsmate_y', '$pet_x', '$pet_y', '$mobile_x', '$mobile_y', '$voiceassistant_x', '$voiceassistant_y', '$tv_x', '$tv_y', '$laptop_x', '$laptop_y', '$radio_x', '$radio_y', '$tablet_x', '$tablet_y', '$phone_x', '$phone_y','$videogameconsole_x', '$videogameconsole_y', '$pc_x', '$pc_y', '$smartwatch_x', '$smartwatch_y', '$gps_x', '$gps_y', '$me_x', '$me_y') 
	 ");

	if ($result) {
		$res['message'] = "Saved arrangement in DB";
	} else{
		echo $conn->error;
		$res['error'] = true;
		$res['message'] = "Error while saving arrangement";
	}
}

$conn -> close();
header("Content-type: application/json");
echo json_encode($res);
die();
?>