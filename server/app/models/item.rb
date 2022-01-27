class Item < ActiveRecord::Base
    belongs_to :fridge

    def self.by_type
        self.all.order(item_type: :desc)
      end

    def self.by_date
      self.all.order(expiry_date: :desc)
    end


end