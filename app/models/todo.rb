class Todo < ActiveRecord::Base
  attr_accessible :title, :complete_status
  attr_reader :completed
  
  def completed
    !self.completed_at.nil?
  end
  
end
