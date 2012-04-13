package DDG::Spice::Xkcd;

use DDG::Spice;

triggers startend => "xkcd";

handle query_lc => sub {
    if ($_ =~ /^upc (\d{12})$/) {
	    if ($1) {
	        $return = qq(/iupc/$1);
	      }
    }
};

1;
