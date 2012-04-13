package DDG::Spice::Upc;

use DDG::Spice;

triggers start => "upc";
handle remainder => sub {
    if ($_ =~ /\s(\d{12})/) {
      if ($1){
        return qq(/iupc/$1)
      }
    }
};
1;