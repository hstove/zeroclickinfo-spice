function ddg_spice_rand_word(iwrd) {
    var snippet = '';

    // Validity check.
    if (iwrd['word']) {

        // Snippet that gets shown in the 0-click box.
	snippet = iwrd['word'];

	items = new Array();
	items[0] = new Array();
	items[0]['a'] = '<a onclick="fl=1" href="http://wordnik.com/words/' + snippet + '">' + snippet + '</a> (random)';

	items[0]['h'] = '';

        // Source name and url for the More at X link.
	items[0]['s'] = 'Wordnik';
	items[0]['u'] = 'http://wordnik.com/';

	nra(items);
    }
}
