class CreateTickets < ActiveRecord::Migration[6.0]
  def change
    create_table :tickets do |t|
      t.string :name
      t.string :description
      t.string :urgency
      t.string :creator
      t.string :owner
      t.boolean :completed

      t.timestamps
    end
  end
end
