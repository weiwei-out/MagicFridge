class Pic < ActiveRecord::Base
    def self.shuffle
     self.all.shuffle
    end
 end    