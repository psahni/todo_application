class Todo < ActiveRecord::Base
  attr_accessible :completed_at, :title
end
