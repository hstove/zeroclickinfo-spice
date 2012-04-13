package DDG::Spice::Price;

use DDG::Spice;

triggers any => "price", "price history";
handle query_lc => sub {
    if ($_ != '') {
	    return qq(/iprice/$_);
#	$is_kill_pre_results = 1;
    }
};
1;
