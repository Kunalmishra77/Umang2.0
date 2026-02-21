<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('doctors', function (Blueprint $table) {
            $table->string('role')->nullable();
            $table->integer('cases_handled')->default(0);
            $table->string('next_available_slot')->nullable();
            $table->enum('gender', ['Male', 'Female', 'Other'])->nullable();
            $table->json('tags')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('doctors', function (Blueprint $table) {
            $table->dropColumn(['role', 'cases_handled', 'next_available_slot', 'gender', 'tags']);
        });
    }
};
