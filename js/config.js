/*
 * jQuery
 */
jQuery(document).ready(function($) {
	
	// メンバーのアイコンをTwitterから取得
	var i;
	var url = 'https://www.tecking.org/egs_jp/get-userinfo.php?user=';
	var users = ['akane_natsuki', 'ringo3_41', 'tamori_mo', 'tecking'];
	
	for (i = 0; i < users.length; i++) {
		$.ajax({
			type: 'GET',
			url: url + users[i],
			dataType: 'jsonp',
			success: function(data) {
				document.getElementById(data.screen_name).innerHTML = '<img src="' + data.profile_image_url_https.replace('_normal', '_400x400') + '" style="width: 100%" class="img-rounded" alt="' + data.screen_name + '">';
			}
		});		
	}
});
