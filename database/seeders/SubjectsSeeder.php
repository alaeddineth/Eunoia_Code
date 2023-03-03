<?php

namespace Database\Seeders;
use App\Models\Subject;
use App\Models\UserSubject;

use Illuminate\Database\Seeder;

class SubjectsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $subjects = [
            ['name' => 'Math'],
            ['name' => 'English'],
            ['name' => 'Science'],
        ];
    
        foreach ($subjects as $subject) {
            $subjectModel = Subject::create($subject);
    
            UserSubject::create([
                'user_id' => 1,
                'subject_id' => $subjectModel->id,
            ]);
        }
    }
    
}
